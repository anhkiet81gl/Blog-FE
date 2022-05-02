import React, {ReactNode} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Menu from "./menu";

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({children, title = 'This is the default title'}: Props) => (
    <React.Fragment>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>

        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <Menu/>
            </div>
        </div>

        {children}


    </React.Fragment>
)

export default Layout