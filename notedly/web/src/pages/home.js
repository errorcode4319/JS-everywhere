import React from 'react';

import {useQuery, gql} from '@apollo/client';

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
    return (
        <div>
            <p>This is the home page</p>
        </div>
    );
};

export default Home;