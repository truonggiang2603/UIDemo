// Mock data for the heritage app
const mockData = {
    heritageSpots: [
        {
            id: 1,
            name: "Làng gốm Bát Tràng",
            description: "Làng nghề gốm sứ truyền thống hơn 700 năm tuổi",
            category: "craft",
            tags: ["Làng nghề", "Truyền thống"],
            image: "https://wyndham-thanhthuy.com/wp-content/uploads/2024/08/lang-gom-bat-trang-3.jpg",
            location: { lat: 21.0245, lng: 105.8412 },
            audio: "3:45 phút",
            rating: 4.8,
            reviews: 324,
            openHours: "8:00 - 17:00"
        },
        {
            id: 2,
            name: "Chùa Hương",
            description: "Quần thể di tích tâm linh nổi tiếng tại Hà Nội",
            category: "temple",
            tags: ["Đền chùa", "Tâm linh"],
            image: "https://booking.muongthanh.com/upload_images/images/H%60/kham-pha-chua-huong-ha-noi.jpg",
            location: { lat: 20.9621, lng: 105.7709 },
            audio: "4:20 phút",
            rating: 4.9,
            reviews: 567,
            openHours: "6:00 - 18:00"
        },
        {
            id: 3,
            name: "Phố ẩm thực Hội An",
            description: "Khám phá hương vị đặc trưng miền Trung",
            category: "food",
            tags: ["Ẩm thực", "Phố cổ"],
            image: "https://beptruong.edu.vn/wp-content/uploads/2018/03/quan-hai-lau.jpg",
            location: { lat: 15.8801, lng: 108.3380 },
            audio: "5:15 phút",
            rating: 4.7,
            reviews: 892,
            openHours: "7:00 - 22:00"
        },
        {
            id: 4,
            name: "Văn Miếu Quốc Tử Giám",
            description: "Ngôi đền đầu tiên của Việt Nam, nơi thờ Khổng Tử",
            category: "temple",
            tags: ["Di tích", "Giáo dục"],
            image: "https://phapluat.tuoitrethudo.vn/stores/news_dataimages/hoangphuongduy/102023/11/23/ha-noi-kham-pha-van-hoa-va-lich-su-tai-van-mieu-quoc-tu-giam_3.jpg?",
            location: { lat: 21.0285, lng: 105.8355 },
            audio: "6:30 phút",
            rating: 4.6,
            reviews: 456,
            openHours: "8:30 - 17:30"
        }
    ],
    
    trips: [
        {
            id: 1,
            title: "Hành trình khám phá ẩm thực & lịch sử Huế",
            duration: "3 ngày",
            budget: "1.5-2 triệu",
            tags: ["Cung đình Huế", "Bún bò", "Chùa Thiên Mụ"],
            image: "https://booking.muongthanh.com/upload_images/images/H%60/kham-pha-hue-mong-mo.jpg",
            rating: 4.8,
            participants: 1234
        },
        {
            id: 2,
            title: "Khám phá làng nghề & ẩm thực Hà Nội",
            duration: "2 ngày",
            budget: "1-1.2 triệu",
            tags: ["Làng gốm", "Phở cổ", "Văn Miếu"],
            image: "https://photo2.tinhte.vn/data/attachment-files/2024/09/8455481_Artboard-4-3.webp",
            rating: 4.7,
            participants: 987
        }
    ],
    
    chatResponses: [
        {
            keywords: ["làng nghề", "gốm", "bát tràng", "thủ công"],
            response: "Làng gốm Bát Tràng là một trong những làng nghề truyền thống nổi tiếng nhất Việt Nam với hơn 700 năm lịch sử. Bạn có thể tham quan các xưởng sản xuất, trải nghiệm làm gốm và mua các sản phẩm thủ công đẹp mắt. Thời gian mở cửa từ 8:00-17:00, giá vé khoảng 20.000đ."
        },
        {
            keywords: ["chùa", "tâm linh", "hương", "thiên mụ", "đền"],
            response: "Chùa Hương là quần thể di tích Phật giáo nổi tiếng với cảnh quan thiên nhiên tuyệt đẹp. Thời gian lý tưởng để tham quan là từ tháng 1 đến tháng 3 hàng năm. Bạn có thể đi thuyền trên sông Yến và leo núi để thăm các ngôi chùa cổ."
        },
        {
            keywords: ["ẩm thực", "món ăn", "đặc sản", "phở", "bún", "cao lầu"],
            response: "Việt Nam có nền ẩm thực phong phú với nhiều món ăn đặc trưng như phở Hà Nội, bún bò Huế, cao lầu Hội An. Mỗi vùng miền đều có những hương vị riêng biệt. Tôi có thể gợi ý cho bạn những địa điểm ẩm thực nổi tiếng!"
        },
        {
            keywords: ["văn miếu", "khổng tử", "giáo dục", "học tập"],
            response: "Văn Miếu Quốc Tử Giám là ngôi đền đầu tiên của Việt Nam, được xây dựng để thờ Khổng Tử và các bậc hiền tài. Đây cũng là trường đại học đầu tiên của nước ta với nhiều giá trị lịch sử và văn hóa."
        },
        {
            keywords: ["lễ hội", "truyền thống", "tết", "festival"],
            response: "Việt Nam có nhiều lễ hội truyền thống phong phú như Tết Nguyên Đán, Lễ hội Chùa Hương, Festival Huế... Mỗi lễ hội đều mang đậm bản sắc văn hóa dân tộc và thu hút đông đảo du khách."
        }
    ]
};

// Alpine.js app data
function app() {
    return {
        currentPage: 'home',
        chatbotOpen: false,
        chatInput: '',
        chatMessages: [],
        searchQuery: '',
        selectedFilters: ['craft', 'temple', 'food'],
        filterMenuOpen: false,
        currentSpot: null,
        selectedTripOptions: {
            duration: '2-3 ngày',
            budget: 'Vừa phải',
            themes: ['Ẩm thực', 'Lịch sử']
        },
        favoriteSpots: [],
        notifications: [],
        isOnline: navigator.onLine,
        
        init() {
            this.loadUserPreferences();
            this.loadPage('home');
            this.setupNavigation();
            this.initChatbot();
            this.setupOfflineHandling();
            this.initDraggableChatbot();
            window.app = this; // Make globally accessible
        },
        
        loadUserPreferences() {
            try {
                const saved = localStorage.getItem('heritageAppPreferences');
                if (saved) {
                    const prefs = JSON.parse(saved);
                    this.favoriteSpots = prefs.favoriteSpots || [];
                    this.selectedFilters = prefs.selectedFilters || ['craft', 'temple', 'food'];
                }
            } catch (error) {
                console.log('Could not load user preferences');
            }
        },
        
        saveUserPreferences() {
            try {
                const prefs = {
                    favoriteSpots: this.favoriteSpots,
                    selectedFilters: this.selectedFilters,
                    lastVisited: new Date().toISOString()
                };
                localStorage.setItem('heritageAppPreferences', JSON.stringify(prefs));
            } catch (error) {
                console.log('Could not save user preferences');
            }
        },
        
        setupOfflineHandling() {
            window.addEventListener('online', () => {
                this.isOnline = true;
                this.showNotification('Đã kết nối internet', 'success');
            });
            
            window.addEventListener('offline', () => {
                this.isOnline = false;
                this.showNotification('Mất kết nối internet - Một số tính năng có thể bị hạn chế', 'warning');
            });
        },
        
        showNotification(message, type = 'info') {
            const notification = {
                id: Date.now(),
                message,
                type,
                timestamp: new Date()
            };
            
            this.notifications.unshift(notification);
            
            // Auto remove after 5 seconds
            setTimeout(() => {
                this.notifications = this.notifications.filter(n => n.id !== notification.id);
            }, 5000);
        },
        
        setupNavigation() {
            // Add click handlers for navigation
            document.addEventListener('click', (e) => {
                const navItem = e.target.closest('.nav-item');
                if (navItem) {
                    const page = navItem.dataset.page;
                    if (page) {
                        this.loadPage(page);
                    }
                }
            });
        },
        
        loadPage(page) {
            this.currentPage = page;
            
            // Update navigation active state
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
                if (item.dataset.page === page) {
                    item.classList.add('active');
                }
            });
            
            // Load page content
            const contentArea = document.getElementById('content-area');
            switch(page) {
                case 'home':
                    contentArea.innerHTML = this.getHomeContent();
                    break;
                case 'map':
                    contentArea.innerHTML = this.getMapContent();
                    break;
                case 'trip':
                    contentArea.innerHTML = this.getTripContent();
                    break;
                case 'explore':
                    contentArea.innerHTML = this.getExploreContent();
                    break;
                case 'profile':
                    contentArea.innerHTML = this.getProfileContent();
                    break;
            }
            
            this.attachEventHandlers();
        },
        
        getHomeContent() {
            return `
                <div class="content">
                    <!-- Drag boundary for visual feedback -->
                    <div class="drag-boundary"></div>
                    
                    <!-- Header -->
                    <div class="flex justify-between items-center px-4 pt-4">
                        <div>
                            <h1 class="text-2xl font-bold heritage-title">Map Di sản</h1>
                            <p class="text-sm text-gray-500">Khám phá di sản Việt Nam</p>
                        </div>
                        <div class="language-toggle">
                            <span class="active">VI</span>
                            <span>|</span>
                            <span>EN</span>
                        </div>
                    </div>
                    
                    <!-- Search Bar -->
                    <div class="search-bar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        <input type="text" placeholder="Tìm kiếm theo sở thích hoặc địa điểm..." x-model="searchQuery">
                    </div>
                    
                    <!-- Quick Filters -->
                    <div class="px-4 mt-4">
                        <h2 class="text-sm font-semibold mb-2">Khám phá theo chủ đề</h2>
                        <div class="overflow-x-auto">
                            <div class="flex py-2">
                                <div class="filter-chip active" data-filter="craft">Làng nghề</div>
                                <div class="filter-chip" data-filter="temple">Đền chùa</div>
                                <div class="filter-chip" data-filter="food">Ẩm thực đường phố</div>
                                <div class="filter-chip" data-filter="art">Nghệ thuật truyền thống</div>
                                <div class="filter-chip" data-filter="spiritual">Tâm linh</div>
                                <div class="filter-chip" data-filter="festival">Lễ hội</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Suggested Spots -->
                    <div class="px-4 mt-6">
                        <div class="flex justify-between items-center mb-2">
                            <h2 class="text-sm font-semibold">Gợi ý cho bạn</h2>
                            <span class="text-xs text-primary">Xem tất cả</span>
                        </div>
                        <div class="overflow-x-auto">
                            <div class="flex py-2">
                                ${this.renderSpotCards()}
                            </div>
                        </div>
                    </div>
                    
                    <!-- Plan Journey -->
                    <div class="plan-journey pulse" onclick="window.app.loadPage('trip')">
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="font-semibold">Lên kế hoạch cho chuyến đi</h3>
                                <p class="text-xs mt-1 opacity-80">Tạo lịch trình cá nhân với AI</p>
                            </div>
                            <div class="bg-white bg-opacity-20 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Recent Discoveries -->
                    <div class="px-4 mt-6 mb-20">
                        <div class="flex justify-between items-center mb-2">
                            <h2 class="text-sm font-semibold">Khám phá gần đây</h2>
                            <span class="text-xs text-primary">Xem tất cả</span>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex items-center py-3 border-b border-gray-100">
                                <div class="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#D2691E" viewBox="0 0 16 16">
                                        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                                    </svg>
                                </div>
                                <div class="ml-3 flex-1">
                                    <h3 class="text-sm font-semibold">Phố cổ Hội An</h3>
                                    <p class="text-xs text-gray-500">Di sản văn hóa thế giới UNESCO</p>
                                </div>
                                <div class="text-xs text-gray-400">2 ngày trước</div>
                            </div>
                            
                            <div class="flex items-center py-3 border-b border-gray-100">
                                <div class="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#D2691E" viewBox="0 0 16 16">
                                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
                                    </svg>
                                </div>
                                <div class="ml-3 flex-1">
                                    <h3 class="text-sm font-semibold">Chợ Bến Thành</h3>
                                    <p class="text-xs text-gray-500">Khu chợ biểu tượng của Sài Gòn</p>
                                </div>
                                <div class="text-xs text-gray-400">1 tuần trước</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        
        getMapContent() {
            return pageTemplates.getMapContent();
        },
        
        getTripContent() {
            return pageTemplates.getTripContent();
        },
        
        getExploreContent() {
            return pageTemplates.getExploreContent();
        },
        
        getProfileContent() {
            return pageTemplates.getProfileContent();
        },
        
        renderSpotCards() {
            return mockData.heritageSpots.map(spot => `
                <div class="spot-card" data-spot-id="${spot.id}" onclick="window.app.showSpotDetail(${spot.id})">
                    <div class="spot-image" style="background-image: url('${spot.image}');">
                        <button class="favorite-button ${this.favoriteSpots.includes(spot.id) ? 'active' : ''}" 
                                onclick="event.stopPropagation(); window.app.toggleFavorite(${spot.id})"
                                aria-label="${this.favoriteSpots.includes(spot.id) ? 'Bỏ yêu thích' : 'Thêm vào yêu thích'}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                        </button>
                        <div class="spot-rating">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            ${spot.rating}
                        </div>
                    </div>
                    <div class="spot-info">
                        <h3>${spot.name}</h3>
                        <p>${spot.description}</p>
                        <div class="spot-meta">
                            ${spot.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        <div class="spot-details">
                            <span class="audio-duration">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868L7.5 9.5V3.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                                ${spot.audio}
                            </span>
                            <span class="reviews-count">${spot.reviews} đánh giá</span>
                            <span class="open-hours">${spot.openHours}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        },
        
        attachEventHandlers() {
            // Add event handlers for interactive elements
            this.attachSpotCardHandlers();
            this.attachFilterHandlers();
            this.attachTripHandlers();
            this.attachMapHandlers();
        },
        
        attachSpotCardHandlers() {
            document.querySelectorAll('.spot-card').forEach(card => {
                card.addEventListener('click', () => {
                    const spotId = parseInt(card.dataset.spotId);
                    this.showSpotDetail(spotId);
                });
            });
        },
        
        attachFilterHandlers() {
            document.querySelectorAll('.filter-chip').forEach(chip => {
                chip.addEventListener('click', () => {
                    chip.classList.toggle('active');
                });
            });
        },
        
        attachTripHandlers() {
            document.querySelectorAll('.option-chip').forEach(chip => {
                chip.addEventListener('click', () => {
                    const parent = chip.closest('.option-chips');
                    parent.querySelectorAll('.option-chip').forEach(c => c.classList.remove('selected'));
                    chip.classList.add('selected');
                });
            });
        },
        
        attachMapHandlers() {
            // Add click handlers for heritage markers
            document.addEventListener('click', (e) => {
                const marker = e.target.closest('.heritage-marker');
                if (marker) {
                    const spotId = parseInt(marker.dataset.spotId);
                    this.showMapSpotInfo(spotId);
                }
            });
            
            // Add handler for distance slider
            const distanceSlider = document.getElementById('distanceRange');
            if (distanceSlider) {
                distanceSlider.addEventListener('input', (e) => {
                    const value = e.target.value;
                    const valueDisplay = document.getElementById('distanceValue');
                    if (valueDisplay) {
                        valueDisplay.textContent = `${value}km`;
                    }
                });
            }
            
            // Add handler for map view buttons
            document.querySelectorAll('.map-view-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.map-view-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    const view = btn.dataset.view;
                    const map = document.querySelector('.realistic-map');
                    if (map && view === 'satellite') {
                        map.style.filter = 'sepia(0.3) contrast(1.2) brightness(0.9)';
                        this.showNotification('Chuyển sang chế độ vệ tinh', 'info');
                    } else if (map) {
                        map.style.filter = 'none';
                        this.showNotification('Chuyển sang chế độ bản đồ', 'info');
                    }
                });
            });
        },
        
        showSpotDetail(spotId) {
            const spot = mockData.heritageSpots.find(s => s.id === spotId);
            if (spot) {
                this.currentSpot = spot;
                this.loadPage('explore');
            }
        },
        
        toggleChatbot() {
            this.chatbotOpen = !this.chatbotOpen;
        },
        
        sendMessage() {
            if (!this.chatInput.trim()) return;
            
            // Add user message
            const messagesContainer = document.getElementById('chatMessages');
            const userMessage = document.createElement('div');
            userMessage.className = 'message message-user';
            userMessage.innerHTML = `<div>${this.chatInput}</div>`;
            messagesContainer.appendChild(userMessage);
            
            // Generate bot response
            const response = this.generateChatResponse(this.chatInput);
            setTimeout(() => {
                const botMessage = document.createElement('div');
                botMessage.className = 'message message-bot';
                botMessage.innerHTML = `<div>${response}</div>`;
                messagesContainer.appendChild(botMessage);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 1000);
            
            this.chatInput = '';
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        },
        
        generateChatResponse(input) {
            const inputLower = input.toLowerCase();
            
            for (const response of mockData.chatResponses) {
                if (response.keywords.some(keyword => inputLower.includes(keyword))) {
                    return response.response;
                }
            }
            
            return "Cảm ơn bạn đã hỏi! Tôi sẽ tìm hiểu thêm về điều này và trả lời bạn sớm nhất có thể.";
        },
        
        initChatbot() {
            // Initialize with welcome message
            this.chatMessages = [{
                type: 'bot',
                message: 'Xin chào! Tôi có thể giúp bạn tìm hiểu về di sản văn hóa Việt Nam. Bạn muốn khám phá điều gì?'
            }];
        },
        
        toggleFavorite(spotId) {
            const index = this.favoriteSpots.indexOf(spotId);
            if (index > -1) {
                this.favoriteSpots.splice(index, 1);
                this.showNotification('Đã xóa khỏi danh sách yêu thích', 'info');
            } else {
                this.favoriteSpots.push(spotId);
                this.showNotification('Đã thêm vào danh sách yêu thích', 'success');
            }
            this.saveUserPreferences();
            // Update the UI
            this.loadPage(this.currentPage);
        },
        
        renderTripCards() {
            return mockData.trips.map(trip => `
                <div class="trip-card" onclick="window.app.selectTrip(${trip.id})">
                    <div class="trip-image" style="background-image: url('${trip.image}');">
                        <div class="trip-stats">
                            <div class="trip-stat">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                ${trip.rating}
                            </div>
                            <div class="trip-stat">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                </svg>
                                ${trip.participants}
                            </div>
                        </div>
                    </div>
                    <div class="trip-info">
                        <h3>${trip.title}</h3>
                        <div class="trip-details">
                            <span class="duration">${trip.duration}</span>
                            <span class="budget">${trip.budget}</span>
                        </div>
                        <div class="trip-tags">
                            ${trip.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        },
        
        selectTrip(tripId) {
            const trip = mockData.trips.find(t => t.id === tripId);
            if (trip) {
                this.showNotification(`Đã chọn: ${trip.title}`, 'success');
                // Add trip selection logic here
                this.loadPage('trip'); // Navigate to trip planner with selected trip
            }
        },
        
        // Google Maps-like functionality
        toggleFilterMenu() {
            const filterMenu = document.getElementById('filterMenu');
            if (filterMenu) {
                const isVisible = filterMenu.style.display !== 'none';
                if (isVisible) {
                    filterMenu.style.display = 'none';
                    filterMenu.classList.remove('show');
                } else {
                    filterMenu.style.display = 'block';
                    setTimeout(() => filterMenu.classList.add('show'), 10);
                }
            }
        },
        
        showMapSpotInfo(spotId) {
            const spot = mockData.heritageSpots.find(s => s.id === spotId);
            if (!spot) return;
            
            const panel = document.getElementById('mapInfoPanel');
            if (!panel) return;
            
            // Populate panel with spot data
            const overlayImage = document.getElementById('overlayImage');
            const overlayTitle = document.getElementById('overlayTitle');
            const overlayTags = document.getElementById('overlayTags');
            const overlayDescription = document.getElementById('overlayDescription');
            const overlayRating = document.getElementById('overlayRating');
            const overlayHours = document.getElementById('overlayHours');
            
            if (overlayImage) overlayImage.src = spot.image;
            if (overlayTitle) overlayTitle.textContent = spot.name;
            if (overlayDescription) overlayDescription.textContent = spot.description;
            if (overlayRating) overlayRating.textContent = spot.rating;
            if (overlayHours) overlayHours.textContent = spot.openHours;
            
            // Update tags
            if (overlayTags) {
                overlayTags.innerHTML = spot.tags.map(tag => 
                    `<span class="tag">${tag}</span>`
                ).join('');
            }
            
            // Store current spot for other functions
            this.currentMapSpot = spot;
            
            // Show panel
            panel.style.display = 'block';
            setTimeout(() => {
                panel.classList.add('show');
            }, 10);
            
            // Auto-hide filter menu if open
            const filterMenu = document.getElementById('filterMenu');
            if (filterMenu && filterMenu.classList.contains('show')) {
                this.toggleFilterMenu();
            }
        },
        
        closeMapSpotInfo() {
            const panel = document.getElementById('mapInfoPanel');
            if (panel) {
                panel.classList.remove('show');
                panel.classList.remove('expanded');
                setTimeout(() => {
                    panel.style.display = 'none';
                    // Reset expanded content
                    const expandedContent = document.getElementById('expandedContent');
                    if (expandedContent) {
                        expandedContent.style.display = 'none';
                    }
                }, 300);
            }
            this.currentMapSpot = null;
        },
        
        toggleInfoPanel() {
            const panel = document.getElementById('mapInfoPanel');
            const expandedContent = document.getElementById('expandedContent');
            
            if (!panel || !expandedContent) return;
            
            const isExpanded = panel.classList.contains('expanded');
            
            if (isExpanded) {
                // Collapse
                panel.classList.remove('expanded');
                expandedContent.style.display = 'none';
            } else {
                // Expand
                panel.classList.add('expanded');
                expandedContent.style.display = 'block';
            }
        },
        
        addToTrip() {
            if (this.currentMapSpot) {
                this.showNotification(`Đã thêm "${this.currentMapSpot.name}" vào hành trình`, 'success');
                // Add logic to actually add to trip here
            } else {
                this.showNotification('Đã thêm vào hành trình', 'success');
            }
        },
        
        zoomIn() {
            // Simulate zoom in functionality
            this.showNotification('Phóng to bản đồ', 'info');
            const map = document.querySelector('.realistic-map');
            if (map) {
                const currentScale = map.style.transform ? parseFloat(map.style.transform.match(/scale\(([\d.]+)\)/)?.[1] || 1) : 1;
                const newScale = Math.min(currentScale * 1.2, 3);
                map.style.transform = `scale(${newScale})`;
                map.style.transformOrigin = 'center center';
            }
        },
        
        zoomOut() {
            // Simulate zoom out functionality
            this.showNotification('Thu nhỏ bản đồ', 'info');
            const map = document.querySelector('.realistic-map');
            if (map) {
                const currentScale = map.style.transform ? parseFloat(map.style.transform.match(/scale\(([\d.]+)\)/)?.[1] || 1) : 1;
                const newScale = Math.max(currentScale / 1.2, 0.5);
                map.style.transform = `scale(${newScale})`;
                map.style.transformOrigin = 'center center';
            }
        },
        
        centerMap() {
            // Reset map position and zoom
            this.showNotification('Về vị trí trung tâm', 'info');
            const map = document.querySelector('.realistic-map');
            if (map) {
                map.style.transform = 'scale(1)';
            }
        },
        
        toggleTrafficLayer() {
            // Toggle traffic layer
            this.showNotification('Bật/tắt lớp giao thông', 'info');
            // Add traffic layer logic here
        },
        
        toggleLayer(layerType) {
            const btn = document.querySelector(`[onclick="window.app.toggleLayer('${layerType}')"]`);
            if (btn) {
                btn.classList.toggle('active');
                
                switch(layerType) {
                    case 'heritage':
                        this.showNotification('Bật/tắt hiển thị di sản', 'info');
                        const markers = document.querySelectorAll('.heritage-marker');
                        markers.forEach(marker => {
                            marker.style.display = btn.classList.contains('active') ? 'block' : 'none';
                        });
                        break;
                    case 'traffic':
                        this.showNotification('Bật/tắt thông tin giao thông', 'info');
                        break;
                    case 'restaurants':
                        this.showNotification('Bật/tắt hiển thị nhà hàng', 'info');
                        break;
                }
            }
        },
        
        goToCurrentLocation() {
            this.showNotification('Đang xác định vị trí của bạn...', 'info');
            
            // Simulate geolocation
            setTimeout(() => {
                this.showNotification('Đã tìm thấy vị trí của bạn', 'success');
                this.centerMap();
            }, 1500);
        },
        
        getDirections() {
            if (this.currentMapSpot) {
                this.showNotification(`Đang tính toán lộ trình đến ${this.currentMapSpot.name}...`, 'info');
            } else {
                this.showNotification('Đang tính toán lộ trình...', 'info');
            }
            
            // Simulate route calculation
            setTimeout(() => {
                this.showNotification('Đã tìm thấy lộ trình tốt nhất!', 'success');
            }, 1500);
            
            this.closeMapSpotInfo();
        },
        
        closeRoute() {
            const routeInfo = document.getElementById('routeInfo');
            if (routeInfo) {
                routeInfo.style.display = 'none';
            }
        },
        
        shareLocation() {
            if (navigator.share) {
                navigator.share({
                    title: 'Địa điểm di sản',
                    text: 'Khám phá địa điểm di sản này cùng tôi!',
                    url: window.location.href
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                navigator.clipboard.writeText(window.location.href);
                this.showNotification('Đã sao chép link chia sẻ', 'success');
            }
        },
        
        applyFilters() {
            const checkboxes = document.querySelectorAll('#filterMenu input[type="checkbox"]');
            const selectedFilters = Array.from(checkboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.dataset.filter);
            
            this.selectedFilters = selectedFilters;
            this.saveUserPreferences();
            
            // Update visible markers based on filters
            document.querySelectorAll('.heritage-marker').forEach(marker => {
                const spotId = parseInt(marker.dataset.spotId);
                const spot = mockData.heritageSpots.find(s => s.id === spotId);
                
                if (spot && selectedFilters.includes(spot.category)) {
                    marker.style.display = 'block';
                } else {
                    marker.style.display = 'none';
                }
            });
            
            this.showNotification(`Đã áp dụng bộ lọc (${selectedFilters.length} loại)`, 'success');
            this.toggleFilterMenu();
        },
        
        clearFilters() {
            const checkboxes = document.querySelectorAll('#filterMenu input[type="checkbox"]');
            checkboxes.forEach(cb => cb.checked = false);
            
            // Show all markers
            document.querySelectorAll('.heritage-marker').forEach(marker => {
                marker.style.display = 'block';
            });
            
            this.selectedFilters = [];
            this.saveUserPreferences();
            this.showNotification('Đã xóa tất cả bộ lọc', 'info');
        },
        
        initDraggableChatbot() {
            const chatbotButton = document.querySelector('.chatbot-button');
            if (!chatbotButton) return;
            
            let isDragging = false;
            let startX, startY, initialX, initialY;
            let currentX = 20, currentY = 20; // Default position from bottom-right
            const self = this; // Store reference to this
            
            // Mouse events
            chatbotButton.addEventListener('mousedown', startDrag);
            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', endDrag);
            
            // Touch events
            chatbotButton.addEventListener('touchstart', startDrag, { passive: false });
            document.addEventListener('touchmove', drag, { passive: false });
            document.addEventListener('touchend', endDrag);
            
            function startDrag(e) {
                e.preventDefault();
                isDragging = true;
                chatbotButton.classList.add('dragging');
                
                const rect = chatbotButton.getBoundingClientRect();
                const contentArea = document.getElementById('content-area');
                const contentRect = contentArea.getBoundingClientRect();
                
                if (e.type === 'mousedown') {
                    startX = e.clientX;
                    startY = e.clientY;
                } else {
                    startX = e.touches[0].clientX;
                    startY = e.touches[0].clientY;
                }
                
                initialX = rect.left - contentRect.left;
                initialY = rect.top - contentRect.top;
                
                // Add visual feedback
                const boundary = document.querySelector('.drag-boundary');
                if (boundary) {
                    boundary.classList.add('active');
                }
            }
            
            function drag(e) {
                if (!isDragging) return;
                e.preventDefault();
                
                let clientX, clientY;
                if (e.type === 'mousemove') {
                    clientX = e.clientX;
                    clientY = e.clientY;
                } else {
                    clientX = e.touches[0].clientX;
                    clientY = e.touches[0].clientY;
                }
                
                const deltaX = clientX - startX;
                const deltaY = clientY - startY;
                
                const contentArea = document.getElementById('content-area');
                const contentRect = contentArea.getBoundingClientRect();
                const buttonRect = chatbotButton.getBoundingClientRect();
                
                // Calculate new position
                let newX = initialX + deltaX;
                let newY = initialY + deltaY;
                
                // Constrain within content area
                const minX = 10;
                const maxX = contentRect.width - buttonRect.width - 10;
                const minY = 10;
                const maxY = contentRect.height - buttonRect.height - 10;
                
                newX = Math.max(minX, Math.min(maxX, newX));
                newY = Math.max(minY, Math.min(maxY, newY));
                
                // Apply position
                chatbotButton.style.left = `${newX}px`;
                chatbotButton.style.top = `${newY}px`;
                chatbotButton.style.right = 'auto';
                chatbotButton.style.bottom = 'auto';
                
                currentX = newX;
                currentY = newY;
            }
            
            function endDrag() {
                if (!isDragging) return;
                
                isDragging = false;
                chatbotButton.classList.remove('dragging');
                
                // Remove visual feedback
                const boundary = document.querySelector('.drag-boundary');
                if (boundary) {
                    boundary.classList.remove('active');
                }
                
                // Snap to edges if close
                const contentArea = document.getElementById('content-area');
                const contentRect = contentArea.getBoundingClientRect();
                const buttonRect = chatbotButton.getBoundingClientRect();
                
                const snapDistance = 30;
                let finalX = currentX;
                let finalY = currentY;
                
                // Snap to right edge
                if (currentX > contentRect.width - buttonRect.width - snapDistance) {
                    finalX = contentRect.width - buttonRect.width - 10;
                }
                
                // Snap to left edge
                if (currentX < snapDistance) {
                    finalX = 10;
                }
                
                // Snap to bottom edge
                if (currentY > contentRect.height - buttonRect.height - snapDistance) {
                    finalY = contentRect.height - buttonRect.height - 10;
                }
                
                // Snap to top edge
                if (currentY < snapDistance) {
                    finalY = 10;
                }
                
                // Apply final position with animation
                chatbotButton.style.transition = 'all 0.3s ease';
                chatbotButton.style.left = `${finalX}px`;
                chatbotButton.style.top = `${finalY}px`;
                
                // Reset transition after animation
                setTimeout(() => {
                    chatbotButton.style.transition = 'transform 0.3s, box-shadow 0.3s';
                }, 300);
                
                // Save position
                self.saveChatbotPosition(finalX, finalY);
                
                // Update chatbot window position
                self.updateChatbotWindowPosition(finalX, finalY);
            }
            
            // Prevent click event when dragging
            chatbotButton.addEventListener('click', (e) => {
                if (chatbotButton.classList.contains('dragging')) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
            
            // Load saved position
            this.loadChatbotPosition();
        },
        
        saveChatbotPosition(x, y) {
            try {
                const position = { x, y };
                localStorage.setItem('chatbotPosition', JSON.stringify(position));
            } catch (error) {
                console.log('Could not save chatbot position');
            }
        },
        
        loadChatbotPosition() {
            try {
                const saved = localStorage.getItem('chatbotPosition');
                if (saved) {
                    const position = JSON.parse(saved);
                    const chatbotButton = document.querySelector('.chatbot-button');
                    if (chatbotButton) {
                        chatbotButton.style.left = `${position.x}px`;
                        chatbotButton.style.top = `${position.y}px`;
                        chatbotButton.style.right = 'auto';
                        chatbotButton.style.bottom = 'auto';
                        this.updateChatbotWindowPosition(position.x, position.y);
                    }
                }
            } catch (error) {
                console.log('Could not load chatbot position');
            }
        },
        
        updateChatbotWindowPosition(buttonX, buttonY) {
            const chatbotWindow = document.querySelector('.chatbot-window');
            if (!chatbotWindow) return;
            
            const contentArea = document.getElementById('content-area');
            const contentRect = contentArea.getBoundingClientRect();
            const windowWidth = 300;
            const windowHeight = 400;
            
            let windowX = buttonX;
            let windowY = buttonY - windowHeight - 10;
            
            // Adjust if window goes outside content area
            if (windowX + windowWidth > contentRect.width) {
                windowX = contentRect.width - windowWidth - 10;
            }
            
            if (windowY < 10) {
                windowY = buttonY + 66; // Position below button
            }
            
            if (windowX < 10) {
                windowX = 10;
            }
            
            chatbotWindow.style.left = `${windowX}px`;
            chatbotWindow.style.top = `${windowY}px`;
            chatbotWindow.style.right = 'auto';
            chatbotWindow.style.bottom = 'auto';
            chatbotWindow.classList.add('adaptive');
        }
    }
} 