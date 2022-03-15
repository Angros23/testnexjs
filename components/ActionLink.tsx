import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { CSSProperties } from 'react'
import { FC } from 'react';

const styles: CSSProperties = {
    color: '#007463',
    textDecoration: 'underline'
}

interface Props {
    text: string,
    href: string
}

export const ActionLink: FC<Props> = ({text, href} : Props) => {

    const { asPath } = useRouter();

    return (
        <Link href={ href }>
            <a style={ asPath === href ? styles : undefined }>{ text }</a>
        </Link>
    )
}
