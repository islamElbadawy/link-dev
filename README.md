# LinkDev

Homepage and News for the internet users to be able to view and list of News
with filtering by category.

## Table of Contents

- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Changes in Assets](#changes-in-assets)
- [Notes](#notes)

## Project Structure

project-root/
│
├── src/
│ ├── app/
│ │ ├── homepage/
│ │ │ ├── components/
│ │ │ │ |── banner/
│ │ │ │ |── banner-item/
│ │ │ │ |── home/
│ │ │ │ |── latest-news/
│ │ │ │ |── things-we-do/
│ │ ├── shared/
│ │ │ ├── components/
│ │ │ │ |── footer/
│ │ │ │ |── navbar/
│ │ │ │ |── news-categories/
│ │ │ │ |── news-card-item/
│ │ │ ├── models/
│ │ │ │ |── about-dto.ts/
│ │ │ │ |── banner-item.ts/
│ │ │ │ |── category-item.ts/
│ │ │ │ |── news-item.ts/
│ │ │ │ |── service-item.ts/
│ │ │ ├── pipes/
│ │ │ │ |── filter.pipe.ts/
│ │ │ │ |── parse-category.pipe.ts/
│ │ │ ├── services/
│ │ │ │ |── api.service.ts/
│ ├── assets/

## Dependencies

- Angular 17
- Sass
- Tailwind
- ngx-slick-carousel: "^1.9.3"
- ngx-slick-carousel: "^17.0.0",

## Changes in Assets

- All banner images are not available in design so I downloaded them from google and your official website.
- Navbar sizes and dimensions are not clear as the UI developer used an image to show it.
- Most of buttons and icons are images so I tried to get the closest design as possible.
- The mobile view is not available so I built it depending on my previous experience.
- Most of the assets used need to be optimized so I tried to do this as possible.

## Notes

- Banner bruch line behind the main title of banner I used one as svg and it made the page load slowly so I removed it but is it's availabe I can replace it.
- The performance is heavily affected by slick carouseljs but I don't know what is the best option for now
  and it took much time to find a good one so I used it for now.
- All animations required are done and the ones are not I made only some of them but of course I can handle them.

## Summary

- It was a challenging task as it came after long time no code practice in real work tried to do better but it's good as a start over, I'm waiting to know your feedback regardless I'm approaved or not.

Thanks and Regards
