"use client";
import { Box, Flex, VStack, Separator } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import { useRouter } from "next/navigation";
const userID = "jlahey";
const filters = { members: { $in: [userID] }, type: "messaging" };
const options = { presence: true, state: true };
const sort = { last_message_at: -1 };

const TOKEN = "XX";
const API_KEY = "XX";

const Channel = ({ channel }) => {
  console.log("Channel is ", channel);
  const router = useRouter();

  const getChannelRecvr = () => {
    for (const key in channel?.state?.members) {
      const member = channel?.state?.members[key];
      console.log("Member is ", member);
      if (member?.user_id && member?.user_id !== userID) {
        return member.user;
      }
    }
  };

  const handleClickOnConversation = () => {
    router.push("/messages/cid");
  };

  const chRecvr = getChannelRecvr();

  console.log("Ch recvr ", chRecvr?.name);
  return (
    <VStack
      cursor="pointer"
      py="20px"
      width="100%"
      justifyContent={"flex-start"}
      alignItems="flex-start"
      onClick={handleClickOnConversation}
    >
      {chRecvr?.name}
    </VStack>
  );
};
const ChannelsList = ({ channelsList }) => {
  if (!channelsList) {
    return;
  }

  return (
    <VStack width="100%">
      {channelsList.map((e, i) => {
        return (
          <Box key={i} width="100%">
            <Channel channel={e} key={i} />

            {i < channelsList.length - 1 && (
              <Separator
                variant="solid"
                color="red"
                border="solid 0.05px white"
              />
            )}
          </Box>
        );
      })}
    </VStack>
  );
};

const Messages = () => {
  const [client, setClient] = useState();
  const [channelsList, setChannelsList] = useState([]);

  const initClient = async () => {
    const client = StreamChat.getInstance(API_KEY);
    setClient(client);

    await client.connectUser(
      {
        id: userID,
        name: "Jim Lahey",
        image: "https://i.imgur.com/fR9Jz14.png",
      },
      TOKEN,
    );

    const channelsResponse = await client.queryChannels(filters, sort, options);
    if (channelsResponse) {
      //   console.log("RESPONSE FROM IS ", channelsResponse);
      setChannelsList(channelsResponse);
    }
  };

  useEffect(() => {
    initClient();
  }, []);

  if (!client) return <div>Loading...</div>;

  return (
    <VStack
      paddingBottom="80px"
      paddingTop="80px"
      width="100%"
      minHeight="100dvh"
      bgColor="gray.800"
      paddingX={{ base: "20px", sm: "none" }}
      gapY={14}
    >
      <VStack width="100%" maxWidth="600px">
        <ChannelsList channelsList={channelsList} />
      </VStack>
    </VStack>
  );
};

export default Messages;
