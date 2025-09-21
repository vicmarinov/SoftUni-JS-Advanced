function fromJSONToHTMLTable (dataAsJSONStr) {
    // A function to escape some special characters to avoid HTML injection
    function escapeSpecialChars (value) {
        return value
            .toString()
            .replaceAll('&', '&amp;')
            .replaceAll('"', '&quot;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;');
    }

    const tableEntriesArr = JSON.parse(dataAsJSONStr);
    const tableHeadings = Object.keys(tableEntriesArr[0]);

    const tableRows = [];

    // Make the first heading row
    let firstRowContent = '';

    for (let heading of tableHeadings) {
        firstRowContent += `<th>${escapeSpecialChars(heading)}</th>`;
    }

    tableRows.push(`<tr>${firstRowContent}</tr>`);

    // Make the other rows of the table
    for (let tableEntry of tableEntriesArr) {
        let rowContent = '';

        for (let heading of tableHeadings) {
            rowContent += `<td>${escapeSpecialChars(tableEntry[heading])}</td>`;
        }

        tableRows.push(`<tr>${rowContent}</tr>`);
    }

    // Build the HTML table
    let tableHTML = `<table>\n\t${tableRows.join('\n\t')}\n</table>`;
    
    return tableHTML;
}

console.log(fromJSONToHTMLTable(
    `[
        {
            "Name":"Stamat",
            "Score":5.5
        },
        {
            "Name":"Rumen",
            "Score":6
        }
    ]`
));

console.log(fromJSONToHTMLTable(
    `[
        {
            "Name":"Pesho",
            "Score":4,
            "Grade":8
        },
        {
            "Name":"Gosho",
            "Score":5,
            "Grade":8
        },
        {
            "Name":"Angel",
            "Score":5.50,
            "Grade":10
        }
    ]`
));

console.log(fromJSONToHTMLTable(
    `[
        {
            "Name":"Pesho",
            "Score":4,
            "Grade":8
        },
        {
            "Name":"Gosho",
            "Score":5,
            "Grade":8
        },
        {
            "Name":"Angel",
            "Score":5.50,
            "Grade":10
        }
    ]`
));