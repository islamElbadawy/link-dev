# LinkDev

Homepage and News for the internet users to be able to view and list News
with filtering by category.

## Table of Contents

- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Changes in Assets](#changes-in-assets)
- [Notes](#notes)

## Project Structure

project-root/<br>
│
├── src/ <br>
│ ├── app/<br>
│ │ ├── homepage/<br>
│ │ │ ├── components/<br>
│ │ │ │ |── banner<br>
│ │ │ │ |── banner-item<br>
│ │ │ │ |── home<br>
│ │ │ │ |── latest-news<br>
│ │ │ │ |── things-we-do<br>
│ │ ├── shared/<br>
│ │ │ ├── components/<br>
│ │ │ │ |── footer<br>
│ │ │ │ |── navbar<br>
│ │ │ │ |── news-categories<br>
│ │ │ │ |── news-card-item<br>
│ │ │ ├── models/<br>
│ │ │ │ |── about-dto.ts<br>
│ │ │ │ |── banner-item.ts<br>
│ │ │ │ |── category-item.ts<br>
│ │ │ │ |── news-item.ts</br>
│ │ │ │ |── service-item.ts<br>
│ │ │ ├── pipes/<br>
│ │ │ │ |── filter.pipe.ts<br>
│ │ │ │ |── parse-category.pipe.ts<br>
│ │ │ ├── services/<br>
│ │ │ │ |── api.service.ts<br>
│ ├── assets/<br>

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
- I made some components to be used in other modules keeping in mind project scalability such as News-card-item, and news-categories components.
- The performance is heavily affected by slick carouseljs but I don't know what is the best option for now
  and it took much time to find a good one so I used it for now.
- All animations required are done and the ones are not I made only some of them but of course I can handle them.

## Summary

- It was a challenging task as it came after long time no code practice in real work tried to do better but it's good as a start over, I'm waiting to know your feedback regardless I'm approaved or not.

Thanks and Regards
