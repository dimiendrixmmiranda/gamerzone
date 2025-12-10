import Link from "next/link";
import { FaInstagram, FaFacebook, FaTiktok, FaEnvelope, FaSteam, FaTwitch, FaTwitter } from "react-icons/fa";

interface RedesProps {
    estilo: string,
    visibilidadeLabel: boolean
    linkInstagram?: string
    linkFacebook?: string
    linkTiktok?: string
    linkEmail?: string
    linkSteam?: string
    linkTwitch?: string
    linkTwitter?: string
}

export default function Redes({ estilo, visibilidadeLabel, linkInstagram, linkFacebook, linkTiktok, linkEmail, linkSteam, linkTwitch, linkTwitter }: RedesProps) {
    return (
        <ul className={estilo}>
            {
                linkInstagram && (
                    <li className="mx-auto my-auto">
                        <Link href={linkInstagram}>
                            <div className="flex items-center gap-1">
                                <div>
                                    <FaInstagram />
                                </div>
                                <p className={`${visibilidadeLabel ? 'flex' : 'hidden'}`}>Instagram</p>
                            </div>
                        </Link>
                    </li>
                )
            }
            {
                linkFacebook && (
                    <li className="mx-auto my-auto">
                        <Link href={linkFacebook}>
                            <div className="flex items-center gap-1">
                                <div>
                                    <FaFacebook />
                                </div>
                                <p className={`${visibilidadeLabel ? 'flex' : 'hidden'}`}>Facebook</p>
                            </div>
                        </Link>
                    </li>
                )
            }
            {
                linkTiktok && (
                    <li className="mx-auto my-auto">
                        <Link href={linkTiktok}>
                            <div className="flex items-center gap-1">
                                <div>
                                    <FaTiktok />
                                </div>
                                <p className={`${visibilidadeLabel ? 'flex' : 'hidden'}`}>Tiktok</p>
                            </div>
                        </Link>
                    </li>
                )
            }
            {
                linkEmail && (
                    <li className="mx-auto my-auto">
                        <Link href={linkEmail}>
                            <div className="flex items-center gap-1">
                                <div>
                                    <FaEnvelope />
                                </div>
                                <p className={`${visibilidadeLabel ? 'flex' : 'hidden'}`}>Email</p>
                            </div>
                        </Link>
                    </li>
                )
            }
            {
                linkSteam && (
                    <li className="mx-auto my-auto">
                        <Link href={linkSteam}>
                            <div className="flex items-center gap-1">
                                <div>
                                    <FaSteam />
                                </div>
                                <p className={`${visibilidadeLabel ? 'flex' : 'hidden'}`}>Steam</p>
                            </div>
                        </Link>
                    </li>
                )
            }
            {
                linkTwitch && (
                    <li className="mx-auto my-auto">
                        <Link href={linkTwitch}>
                            <div className="flex items-center gap-1">
                                <div>
                                    <FaTwitch />
                                </div>
                                <p className={`${visibilidadeLabel ? 'flex' : 'hidden'}`}>Twitch</p>
                            </div>
                        </Link>
                    </li>
                )
            }
            {
                linkTwitter && (
                    <li className="mx-auto my-auto">
                        <Link href={linkTwitter}>
                            <div className="flex items-center gap-1">
                                <div>
                                    <FaTwitter />
                                </div>
                                <p className={`${visibilidadeLabel ? 'flex' : 'hidden'}`}>Twitter</p>
                            </div>
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}