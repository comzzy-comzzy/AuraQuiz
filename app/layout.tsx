import type { Metadata } from "next";
import "./styles.css";
export const metadata:Metadata={title:"Aura Academy | Master crypto with confidence",description:"Learn wallet analysis, DeFi workflows and transaction safety through guided lessons and mastery quizzes."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
