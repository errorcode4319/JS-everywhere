import React from 'react';
import ReactMarkdown from 'react-markdown';

import {useQuery, gql} from '@apollo/client';

import NoteFeed from '../components/NoteFeed';

const GET_NOTES = gql`
    query NoteFeed($cursor: String) {
        noteFeed(cursor: $cursor) {
            cursor 
            hasNextPage 
            notes {
                id 
                createdAt 
                favoriteCount 
                author {
                    username 
                    id 
                    avatar 
                }
            }
        }
    }
`;

const Home = () => {
    // hook query 
    const {data, loading, error, fetchMore} = useQuery(GET_NOTES);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error!</p>;

    return <NoteFeed notes={data.noteFeed.notes} />;
};

export default Home;