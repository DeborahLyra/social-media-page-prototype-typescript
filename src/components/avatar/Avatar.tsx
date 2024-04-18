import styles from './Avatar.module.css'

interface AvatarProps {
  src: string,
  hasBorder?: boolean,
  alt?: string
}

export function Avatar({ src, hasBorder = true, alt }: AvatarProps) { 
  return (
    <div>
      <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src} 
      alt={alt} />
    </div>
  )
}


// hasBorder = true -> cria um default