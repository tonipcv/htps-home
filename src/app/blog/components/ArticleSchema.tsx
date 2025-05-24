export default function ArticleSchema({ article }: { article: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.description,
          author: {
            "@type": "Organization",
            name: "BOOP Labs"
          },
          publisher: {
            "@type": "Organization",
            name: "BOOP Labs",
            logo: {
              "@type": "ImageObject",
              url: "https://boop.tech/logo.png"
            }
          },
          datePublished: article.publishedAt,
          dateModified: article.updatedAt,
          image: article.image,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": article.url
          }
        })
      }}
    />
  )
} 