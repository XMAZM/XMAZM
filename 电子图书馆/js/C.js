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
    // 修正路径从"外语"改为"C语言"
    const bookPath = `./C语言/${bookName}.pdf`;
    window.location.href = `${bookPath}?download=1`;
}

function viewBook(bookName) {
    const bookPath = `./C语言/${bookName}.pdf`;
    window.open(bookPath, '_blank');
}

document.querySelectorAll('.download-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        downloadBook(`红楼梦`);
    });
});