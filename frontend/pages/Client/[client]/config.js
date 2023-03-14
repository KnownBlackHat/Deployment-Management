import Head from 'next/head';
import DeleteServerBtn from '@/components/Client/DeleteServer';
import Navbar from '@/components/Client/Navbar';
import {useRouter} from 'next/router';

export default function Config() {
    const router = useRouter()
    return (
        <>
        <Head>
        <title>Client - Config</title>
        </Head>
        <Navbar homePage={router.query.client} />
        <DeleteServerBtn Slugid={router.query.client} />
        </>
    )}
