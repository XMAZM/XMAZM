document.addEventListener('DOMContentLoaded', () => {
    const totalPages = document.querySelectorAll('.page').length;
    let currentPage = 1;

    function showPage(pageNumber) {
        currentPage = pageNumber;
        const pages = document.querySelectorAll('.page');
        pages.forEach((page, index) => {
            if (index + 1 === pageNumber) {
                page.classList.remove('hidden');
            } else {
                page.classList.add('hidden');
            }
        });

        // 切换导航按钮的状态
        updateNavigationButtons();
    }

    function updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-page');
        const nextBtn = document.getElementById('next-page');

        prevBtn.disabled = currentPage === 1;

        nextBtn.disabled = currentPage === totalPages;
    }

    document.getElementById('next-page').addEventListener('click', () => {
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    });

    document.getElementById('prev-page').addEventListener('click', () => {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });

    // 默认显示第一页
    showPage(1);
});

function downloadBook(bookName) {
    const bookPath = `./Java/${bookName}.pdf`; // 替换为你的书籍路径
    // 添加一个查询参数以确保浏览器下载文件而不是打开页面
    window.location.href = `${bookPath}?download=1`;
}

function viewBook(bookName) {
    const bookPath = `./科幻/${bookName}.pdf`; 
    window.open(bookPath, '_blank');
}
document.querySelectorAll('.download-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        downloadBook(`红楼梦`);
    });
});