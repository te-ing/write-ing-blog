'use client';

import axios from 'axios';
import PostCard from 'components/Post/PostCard';
import PostCardWrapper from 'components/Post/PostCardWrapper';
import { useQuery } from 'react-query';
import { PostType } from 'types/post';
import styles from './page.module.scss';
import LoadingModal from 'components/modal/LoadingModal';

export default function HomePage() {
  const getPostList = async (): Promise<PostType[]> => {
    const { data } = await axios(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/post/list`);
    return data;
  };

  const { isLoading, isError, data } = useQuery(['getPostList'], getPostList);

  return (
    <div className={styles.postCard_wrapper}>{isLoading ? <LoadingModal /> : <PostCardWrapper posts={data} />}</div>
  );
}
