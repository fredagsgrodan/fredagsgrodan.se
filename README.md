# fredagsgrodan.se

Repo for fredagsgrodan.se

Contributions and/or ideas are welcome.

## Adding a frog to the slideshow
If you have a "fredagsgroda" that you want to contribute to the slideshow on the page, feel free to send it to me as a .png and with transparent background. 

Otherwise if you want to make it easier and faster for me:
1. Create a "fredagsgroda"

    *Must be a .png with transparent background. Size doesn't really matter.* 😉
2. Clone the repo
3. Add it to the frog folder
4. Add it to the frogs.js constant
    ```javascript
    const frogs = [
        { src: "bandit", caption: "" },
        { src: "arg", caption: "Zaxvert" },
        { src: "jul", caption: "Zaxvert" },
        { src: "alla-hjartans-dag", caption: "Zaxvert" },
        { src: "svea-rike", caption: "" },
        { src: "NEW-FROG", caption: "THIS IS IF YOU WANT CREDIT" }
    ];
    ```
5. Make a PR