import { Box, Typography } from "@mui/material";
import React, { memo } from "react";
import { lightBlue } from "../../constants/color";
import moment from "moment";
import { fileFormat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";
import { motion } from "framer-motion";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;

  const sameSender = sender?._id === user?._id;

  const timeAgo = moment(createdAt).fromNow();

  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      whileInView={{ opacity: 1, x: 0 }}
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.7rem",
        width: "fit-content",
      }}
      className="border-r-4 border-teal-500 rounded-3xl shadow-[inset_-12px_-8px_40px_#46464620]"
    >
      {!sameSender && (
        <Typography color={lightBlue} fontWeight={"00"} variant="caption" className=" ">
          {sender.name}
        </Typography>
      )}

      <div className="font-extrabold ">

        {content && <h1  className="font-extrabold">{content}</h1>}
      </div>

      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);

          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{
                  color: "black",
                }}

              >
                {RenderAttachment(file, url)}
              </a>
            </Box>
          );
        })}

      <Typography variant="caption" color={"text.secondary"}>
        {timeAgo}
      </Typography>
    </motion.div>
  );
};

export default memo(MessageComponent);
