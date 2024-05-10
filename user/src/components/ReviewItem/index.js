import React, { useState } from "react";
import {
  ReviewItemInfo,
  ReviewItemContent,
  ReviewItemUser,
  ReviewItemWrapper,
  ReviewItemSub
} from "./styles";
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';

const ReviewItem = ({ item, style }) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  }

  return (
    <ReviewItemWrapper style={style}>
      <ReviewItemInfo>
        <ReviewItemUser>{item.userId}</ReviewItemUser>
        <ReviewItemContent>{item.content}</ReviewItemContent>
        <ReviewItemSub>{item.listUserLike.length > 1 ? `${item.listUserLike.length} people found this helpful.` : `1 person found this helpful.`}</ReviewItemSub>
      </ReviewItemInfo>
      <div style={{ margin: '1rem 1.5rem auto auto', cursor: 'pointer' }} onClick={handleLike}>
        {like ? <HeartTwoTone twoToneColor="#eb2f96" /> : <HeartOutlined />}
      </div>
    </ReviewItemWrapper>
  );
};

export default ReviewItem;
