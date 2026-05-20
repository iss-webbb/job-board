# Job Board App

A modern React + TypeScript job board application that allows users to search for jobs, sort results, save jobs locally, and manage saved listings through a modal interface.

---

## Features

* Search jobs using the Adzuna API
* Filter jobs by country
* Sort jobs by:

  * Latest jobs
  * Highest salary
* Save jobs locally using localStorage
* Remove saved jobs
* Modal for viewing saved jobs
* Pagination support
* Responsive UI
* Custom React hooks
* TypeScript support
* Memoized callbacks and derived state optimization

---

## Tech Stack

* React
* TypeScript
* CSS
* Adzuna API
* React Hooks

---

## Project Structure

```bash
src/
 ├── components/
 ├── hooks/
 ├── types/
 ├── styles/
 └── App.tsx
```

---

## Concepts Used

This project demonstrates:

* useState
* useEffect
* useCallback
* useMemo
* Custom Hooks
* Prop Typing
* State Management
* Local Storage Persistence
* Conditional Rendering
* Array Methods (map, filter, sort)

---

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Move into the project folder:

```bash
cd job-board-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## API Used

This project uses the Adzuna Jobs API.

Website:
[https://developer.adzuna.com/](https://developer.adzuna.com/)

---

## Main Functionalities

### Job Search

Users can search for jobs using keywords.

### Sorting

Users can sort jobs based on:

* Date
* Salary

### Save Jobs

Users can save jobs and access them later.

### Local Storage

Saved jobs persist even after refreshing the page.

### Modal System

Saved jobs are displayed inside a modal where users can:

* View job details
* Open job links
* Remove saved jobs

---

## Future Improvements

* Better filtering system
* Backend integration
* Infinite scrolling
* Debounced search
* Better mobile responsiveness

---

## Lessons Learned

During this project, I improved my understanding of:

* TypeScript function typing
* React hooks
* Derived state
* State persistence
* Component communication
* Custom hook architecture
* Debugging TypeScript errors

