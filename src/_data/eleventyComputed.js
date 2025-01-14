module.exports = {
    meta: {
        title: (data) => {
            const title = data.title || data.meta?.title || data.page.fileSlug
            if (title) {
                return title[0].toUpperCase() + title.substring(1)
            } else {
                return title
            }
        }
    }
}
