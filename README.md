# LinkDev

Homepage and News for the internet users to be able to view and list of News
with filtering by category.

## Table of Contents

- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Changes in Assets](#changes-in-assets)
- [Notes](#notes)

## Project Structure

project-root/\n
│
├── src/\n
│ ├── app/\n
│ │ ├── homepage/\n
│ │ │ ├── components/\n
│ │ │ │ |── banner/
│ │ │ │ |── banner-item/\n
│ │ │ │ |── home/\n
│ │ │ │ |── latest-news/\n
│ │ │ │ |── things-we-do/\n
│ │ ├── shared/\n
│ │ │ ├── components/\n
│ │ │ │ |── footer/\n
│ │ │ │ |── navbar/\n
│ │ │ │ |── news-categories/\n
│ │ │ │ |── news-card-item/\n
│ │ │ ├── models/\n
│ │ │ │ |── about-dto.ts/\n
│ │ │ │ |── banner-item.ts/\n
│ │ │ │ |── category-item.ts/\n
│ │ │ │ |── news-item.ts/\n
│ │ │ │ |── service-item.ts/\n
│ │ │ ├── pipes/\n
│ │ │ │ |── filter.pipe.ts/\n
│ │ │ │ |── parse-category.pipe.ts/\n
│ │ │ ├── services/
│ │ │ │ |── api.service.ts/\n
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

- I have created two models to describe the structure of data for things-we-do section inside models folder.
- Banner bruch line behind the main title of banner I used one as svg and it made the page load slowly so I removed it but is it's availabe I can replace it.
- I made some components to be used in other modules keeping in mind project scalability such as News-card-item, and news-categories components.
- The performance is heavily affected by slick carouseljs but I don't know what is the best option for now
  and it took much time to find a good one so I used it for now.
- All animations required are done and the ones are not I made only some of them but of course I can handle them.

## Summary

- It was a challenging task as it came after long time no code practice in real work tried to do better but it's good as a start over, I'm waiting to know your feedback regardless I'm approaved or not.

Thanks and Regards
