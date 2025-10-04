"use client";
import {
  VStack,
  Field,
  Input,
  HStack,
  Checkbox,
  Textarea,
  Box,
  Separator,
  StackDivider,
  StackSeparator,
  Link,
  Image,
  Button,
} from "@chakra-ui/react";
import profile_image from "@/components/common/profile.png";
import { RiEditFill } from "react-icons/ri";
import {
  SectionTitle,
  AccountSectionTitleLink,
} from "../../components/common/common";
import { IoMdBriefcase } from "react-icons/io";
import { IoSchoolSharp } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import { Toaster, toaster } from "@/components/ui/toaster";

const Settings = () => {
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState();
  const fileInputRef = useRef();

  const handlePickImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Optional: basic validation
    if (!file.type.startsWith("image/")) {
      toaster.create({
        title: "Please choose an image file.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Show local preview immediately
    const blobUrl = URL.createObjectURL(file);
    setPreviewUrl((old) => {
      if (old) URL.revokeObjectURL(old);
      return blobUrl;
    });

    // Upload
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch("http://localhost/update-image", {
        method: "POST",
        body: formData,
        // Don't set Content-Type; the browser will set correct multipart boundary.
        // credentials: "include", // uncomment if your endpoint needs cookies
      });

      if (!res.ok) {
        // If server returns JSON with error, try to read it (safe-guarded)
        let msg = "Failed to update profile image.";
        try {
          const data = await res.json();
          if (data?.error) msg = data.error;
        } catch {
          /* ignore parse error */
        }
        throw new Error(msg);
      }

      toaster.create({
        title: "Profile image updated.",
        status: "success",
        duration: 2500,
        isClosable: true,
      });
    } catch (err) {
      toaster.create({
        title: "Upload error",
        description: err?.message ?? "Something went wrong.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      // If upload fails, revert preview to previous image
      setPreviewUrl((old) => {
        if (old) URL.revokeObjectURL(old);
        return null;
      });
    } finally {
      setUploading(false);
      // Clear the file input value so selecting the same file again re-triggers onChange
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <VStack
      paddingBottom="80px"
      paddingTop="80px"
      minHeight="100dvh"
      bgColor="gray.800"
      paddingX={{ base: "20px", sm: "none" }}
      gapY={14}
    >
      <VStack width="100%" alignItems="center" position="relative">
        <Box
          borderRadius="full"
          // transition="0.2s ease"
          bgColor="gray.200"
          overflow="hidden"
        >
          <Image
            width="100px"
            height="100px"
            src={previewUrl ?? profile_image.src}
            cursor="pointer"
            _hover={{ opacity: 0.6 }}
            transition="0.2s ease"
            onClick={handlePickImage}
          />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </Box>
      </VStack>

      <VStack alignItems="start" width="100%" maxWidth="600px" gapY={4}>
        <AccountSectionTitleLink icon={<IoSettingsSharp />} title="Account" />
        <AccountSectionTitleLink icon={<IoPerson />} title="Personal" />
        <AccountSectionTitleLink icon={<IoMdBriefcase />} title="Experience" />
        <AccountSectionTitleLink icon={<IoSchoolSharp />} title="Education" />
        <AccountSectionTitleLink
          icon={<FaExternalLinkSquareAlt />}
          title="Links"
        />
      </VStack>
    </VStack>
  );
};
export default Settings;
