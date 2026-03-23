import styles from './WebsiteEmbedCards.module.css'

export default function WebsiteEmbedCards({
  title = 'Try it out!',
  card,
  className = '',
}) {
  return (
    <section className={`${styles.section} ${className}`.trim()}> 
      <h2 className={styles.heading}>{title}</h2>

      <div className={styles.container}>
        <article className={styles.card}>
          <h4>{card?.title}</h4>                    
          <p>{card?.description}</p>

          <div className={styles.frameWrap}>
            <iframe
              title={card?.title || 'Embedded website'} 
              src={card?.url}
              className={styles.frame}
              loading="lazy" //tell browser not to load until its close to being visible on screen
              allow="fullscreen"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"   //permissions to do certain things because sandbox locks it down
            />
          </div>
        </article>
      </div>
    </section>
  )
}

//question mark is used to prevent errors if card is undefined