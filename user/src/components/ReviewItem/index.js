import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReviewItemInfo, ReviewItemContent, ReviewItemUser, ReviewItemWrapper, ReviewItemSub } from './styles';
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import { getAuthUser } from '../../utils/authStorage';
import { useDispatch } from 'react-redux';
import { notification } from 'antd';
import { updateReviewFavs } from '../../features/review/reviewSlice';

const ReviewItem = ({ item, style }) => {
  const user = getAuthUser();
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3500/api/user/getUser/${item.userId}`);
        if (response.data) {
          setUserName(response.data.userName);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const setLikeStatus = async () => {
      if (user && item.listUserLike.includes(user._id)) {
        setLike(true);
      }
      else {
        setLike(false);
      }
    }

    fetchUserData();
    setLikeStatus();
  }, [item.userId, userName, item.listUserLike, user]);

  const handleLike = () => {
    if (user) {
      if (like) {
        const newLikeList = item.listUserLike.filter(id => id !== user._id);
        const updatedReview = {
          listUser: newLikeList,
          reviewId: item._id
        }
        dispatch(updateReviewFavs(updatedReview));
        setLike(false);
      }
      else {
        const newLikeList = [...item.listUserLike, user._id];
        const updatedReview = {
          listUser: newLikeList,
          reviewId: item._id
        }
        dispatch(updateReviewFavs(updatedReview));
        setLike(true);
      }
    } else {
      notification.error({
        message: 'Need to be logged in!',
      });
    }
  }

  return (
    <ReviewItemWrapper style={style}>
      <ReviewItemInfo>
        <ReviewItemUser>{userName ? userName : item.userId}</ReviewItemUser>
        <ReviewItemContent>{item.content}</ReviewItemContent>
        <ReviewItemSub>{item.listUserLike.length > 1 ? `${item.listUserLike.length} people found this helpful.` : `${item.listUserLike.length} person found this helpful.`}</ReviewItemSub>
      </ReviewItemInfo>
      <div style={{ margin: '1rem 1.5rem auto auto', cursor: 'pointer' }} onClick={handleLike}>
        {like ? <HeartTwoTone twoToneColor='#eb2f96' /> : <HeartOutlined />}
      </div>
    </ReviewItemWrapper>
  );
};

export default ReviewItem;
