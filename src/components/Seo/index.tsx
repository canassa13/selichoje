import { DefaultSeo } from "next-seo";

export const Seo = () => {
  const title = "Selic Hoje: Meta para a taxa Selic";
  const description =
    "A Selic é a taxa básica de juros da economia do Brasil. É o principal instrumento de política monetária utilizado pelo Banco Central (BC) para controlar a inflação.";
  const url = "https://selichoje.com/";
  const image = url + "images/selichoje.webp";

  return (
    <DefaultSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: image,
            width: 800,
            height: 600,
            alt: "Taxa Meta Selic Brasil",
            type: "image/jpeg",
          },
          {
            url: image,
            width: 900,
            height: 800,
            alt: "Taxa Meta Selic Brasil",
            type: "image/jpeg",
          },
        ],
        site_name: "SelicHoje",
      }}
    />
  );
};
