import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

interface Props{
  title: string;
  date: string;
  imageData: IGatsbyImageData | null;
  link: string;
}

export const Card: React.FC<Props> = ({ title, date, imageData, link }) => {

  return (
    <div className="card" style={{border: "1px solid #ddd", paddingLeft: `var(--space-4)`}}>
      {imageData ? <GatsbyImage image={imageData} alt={title}/> : null}
      <Link to={link}>
        <h2>{title}</h2>
      </Link>
      <p style={{opacity: ".7"}}>📅{date}</p>
    </div>
  )
}
