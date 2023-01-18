type Link = {
  url: string;
  label: string;
  active: boolean;
};
type Links = {
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to: number;
  total: number;
};

type dataType = {
  id: number;
  pubdate_iso8601: Date;
  pubdate_unix: string;
  title_type: string;
  title_location: string;
  description: string;
  content: string;
  content_formatted: string;
  content_teaser: string;
  location_string: string;
  date_human: string;
  lat: number;
  lng: number;
  viewport_northeast_lat: string;
  viewport_northeast_lng: string;
  viewport_southwest_lat: string;
  viewport_southwest_lng: string;
  administrative_area_level_1: string;
  administrative_area_level_2?: any;
  image: string;
  external_source_link: string;
  permalink: string;
};
type rootType = {
  links: Links;
  data: dataType[];
};
async function news() {
  const limit = 5;
  const response = await fetch(
    `https://brottsplatskartan.se/api/events/?location=boras&limit=${limit}`
  );
  const { data, links } = (await response.json()) as rootType; //har nu en typ

  console.log(data, links);

  let newsArticle = document.querySelector(".news-article") as HTMLHeadElement;
  newsArticle.innerHTML = "";
  data.map((obj: dataType) => {
    newsArticle.innerHTML += `<div><img src="${obj.image}" alt=""><br> Tid:${obj.content_teaser} <br> <button onclick="location.href='${obj.external_source_link}'" class="hej">läs mer</button></div>`;
  });
  return data;
}

news();
