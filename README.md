# abn_amro

A few comments: 
- Used Vue as it is the language I'm most familiar with and the one I will be using in the job.
- Wanted to wrap up the app with layouts using slots for better readability.
- Centralized state and methods in store.
- Probably could have used more components, like for the search input, but didnt think it was truly necessary due to the small size of the app.
- Added the load more button when the "All" filter is active for better performance.
- I thought a modal would be a nice touch for the show details page.
- Only manually added packages: Axios to fetch the API, Tailwind for styling, and a small styling package to manage the scrollbar in tailwind.
- With the modifications to tailwind no css/sass was used at all.
- As mentioned in the first interview, I'm not truly familiar with tests (yet), that is the reason I decided not include them in the assignment. I would have probably used Cypress, but I would have needed a bit more time to check it out properly in order to add some worthy tests to the app.
- Filters by genre can also be applied directly from a single show page/modal.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
