import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import {API_KEY,CONTEXT_KEYS} from '../public/keys'
import Response from '../public/fakeData'
import { useRouter } from 'next/router';
import SearchResults from '../components/SearchResults';

const Search = ({results}) => {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{router.query.term} - google search</title>
            </Head>
            {console.log(results)}
            <Header />
            <SearchResults results={results} />
        </div>
    );
};

export default Search;

export async function getServerSideProps(context){

    const startIndex = context.query.start || '0';
    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBhhxqdwPKT99HKfpqzx1S-QMKBZ3bW19k&cx=095e09204fceca2a8&q=${context.query.term}`).then(res => res.json())

   
    return {
        props: {
            results: data
        }
    }
}