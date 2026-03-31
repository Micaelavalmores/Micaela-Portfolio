import styles from './WebsiteEmbedCards.module.css'

export default function WebsiteEmbedCards({
  title = 'Try it out!',
  card,
  className = '',
}) {
  return (
    <section className={`${styles.embedCard} ${className}`.trim()}> 
      <h2 className={styles['embed-card_heading']}>{title}</h2>

        <article className={styles['embed-card_wrapper']}>
          <h4 className={styles['embed-card_title']}>{card?.title}</h4>                    
          <p className={styles['embed-card_description']}>{card?.description}</p>

          <div className={styles['embed-card_frameWrap']}>
              <iframe
              title={card?.title || 'Embedded website'} 
              src={card?.url}
              className={styles['embed-card_frame']}  
              loading="lazy" //tell browser not to load until its close to being visible on screen
              allow="fullscreen"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"   //permissions to do certain things because sandbox locks it down
            />
          </div>
        </article>
    </section>
  )
}

//question mark is used to prevent errors if card is undefined