module.exports = {
    // the helper method 'format_time' will take in a timestamp and return a custom formatted string
    format_time: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
          date
        ).getFullYear()}`;
      },
    //cuts the length of blog content down for front page/index
    format_summary: (content) => {
        if (content.length > 300) {
            return content.substring(0, 400) + "...";
        } else {
            return content;
        }
    },
};