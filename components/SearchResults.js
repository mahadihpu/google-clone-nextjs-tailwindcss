import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl[16%] lg:pl-32">
      <p className="text-gray-600 text-md mt-3 mb-5">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime}seconds)
      </p>
      {results.items.map((result, index) => (
        <div className="max-w-xl mb-8" key={index}>
          <div className="group">
            <a href={result.link} className="truncate text-sm">{result.formattedUrl}</a>
            <a href={result.link}>
              <h1 className="text-blue-700 truncate text-xl font-medium group-hover:underline">
                {result.title}
              </h1>
            </a>
            {console.log(results)}
          </div>
          <p className="line-clamp-2">{result.htmlSnippet}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
