import React, { useState } from "react";
import {
  ReviewItemInfo,
  ReviewItemContent,
  ReviewItemUser,
  ReviewItemWrapper,
  ReviewItemSub
} from "./styles";
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';

const ReviewItem = ({ item, user, style }) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  }

  return (
    <ReviewItemWrapper style={style}>
      <ReviewItemInfo>
        <ReviewItemUser>{item.id}</ReviewItemUser>
        <ReviewItemContent>{item.content}</ReviewItemContent>
        <ReviewItemSub>{item.likes > 1 ? `${item.likes} people found this helpful.` : `${item.likes} person found this helpful.`}</ReviewItemSub>
      </ReviewItemInfo>
      <div style={{ margin: '1rem 1.5rem auto auto', cursor: 'pointer' }} onClick={handleLike}>
        {like ? <HeartTwoTone twoToneColor="#eb2f96" /> : <HeartOutlined />}
      </div>
    </ReviewItemWrapper>
  );
};

export default ReviewItem;
