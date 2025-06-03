// Extended page templates for the heritage app

// Add these methods to the app object in app.js
const pageTemplates = {
    
    getMapContent() {
        return `
            <div class="map-container">
                <!-- Simplified Map Background -->
                <svg width="100%" height="100%" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
                    <!-- Map Background -->
                    <rect width="400" height="600" fill="#E8F5E9"/>
                    
                    <!-- Roads -->
                    <path d="M0,200 L400,200" stroke="#FFFFFF" stroke-width="8"/>
                    <path d="M0,300 L400,300" stroke="#FFFFFF" stroke-width="6"/>
                    <path d="M0,400 L400,400" stroke="#FFFFFF" stroke-width="8"/>
                    <path d="M100,0 L100,600" stroke="#FFFFFF" stroke-width="6"/>
                    <path d="M200,0 L200,600" stroke="#FFFFFF" stroke-width="8"/>
                    <path d="M300,0 L300,600" stroke="#FFFFFF" stroke-width="6"/>
                    
                    <!-- Water -->
                    <path d="M250,100 Q300,150 350,100 T400,150 L400,50 L250,50 Z" fill="#B3E5FC"/>
                    
                    <!-- Parks -->
                    <circle cx="150" cy="250" r="30" fill="#A5D6A7"/>
                    <circle cx="350" cy="450" r="40" fill="#A5D6A7"/>
                    
                    <!-- Buildings -->
                    <rect x="120" y="120" width="40" height="40" fill="#FFECB3"/>
                    <rect x="320" y="220" width="30" height="30" fill="#FFECB3"/>
                    <rect x="70" y="350" width="50" height="30" fill="#FFECB3"/>
                    <rect x="220" y="370" width="40" height="40" fill="#FFECB3"/>
                </svg>
                
                <!-- Map Markers -->
                <div class="map-marker temple" style="top: 150px; left: 150px;" data-spot-id="2" onclick="window.app.showMapSpotInfo(2)"></div>
                <div class="map-marker food" style="top: 250px; left: 320px;" data-spot-id="3" onclick="window.app.showMapSpotInfo(3)"></div>
                <div class="map-marker craft" style="top: 350px; left: 100px;" data-spot-id="1" onclick="window.app.showMapSpotInfo(1)"></div>
                <div class="map-marker art" style="top: 400px; left: 250px;" data-spot-id="4" onclick="window.app.showMapSpotInfo(4)"></div>
                
                <!-- Floating Filter Button -->
                <div class="floating-button" onclick="window.app.toggleFilterMenu()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                    </svg>
                </div>
                
                <!-- Compact Map Info Panel -->
                <div class="map-info-panel compact" id="mapInfoPanel" style="display: none;">
                    <div class="info-handle" onclick="window.app.toggleInfoPanel()">
                        <div class="handle-bar"></div>
                    </div>
                    
                    <div class="info-panel-content">
                        <div class="info-header">
                            <div class="info-image-container">
                                <img id="overlayImage" class="info-image" src="" alt="">
                                <div class="rating-badge">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <span id="overlayRating">4.8</span>
                                </div>
                            </div>
                            
                            <div class="info-details">
                                <h3 id="overlayTitle">Chùa Thiên Mụ</h3>
                                <div class="info-tags" id="overlayTags">
                                    <span class="tag">Đền chùa</span>
                                    <span class="tag">Di tích</span>
                                </div>
                                <div class="info-meta">
                                    <span class="meta-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                        </svg>
                                        <span id="overlayHours">8:00 - 17:00</span>
                                    </span>
                                    <span class="meta-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                        </svg>
                                        <span>2.5 km</span>
                                    </span>
                                </div>
                            </div>
                            
                            <button class="close-btn" onclick="window.app.closeMapSpotInfo()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </div>
                        
                        <div class="expanded-content" id="expandedContent" style="display: none;">
                            <p class="info-description" id="overlayDescription">
                                Ngôi chùa cổ nhất thành phố Huế, được xây dựng từ năm 1601 với kiến trúc độc đáo.
                            </p>
                            
                            <div class="info-actions">
                                <button class="action-btn primary" onclick="window.app.getDirections()">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.146.354L10 8.207l4.354 4.353a.5.5 0 0 1-.708.708L10 9.621V14a.5.5 0 0 1-.5.5H1.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5zm1 1v11h7V2H2.5z"/>
                                    </svg>
                                    Chỉ đường
                                </button>
                                <button class="action-btn secondary" onclick="window.app.addToTrip()">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 2a.5.5 0 0 1 .5.5V4h1.5a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V5H6a.5.5 0 0 1 0-1h1.5V2.5A.5.5 0 0 1 8 2z"/>
                                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                                    </svg>
                                    Thêm vào hành trình
                                </button>
                                <button class="action-btn secondary" onclick="window.app.shareLocation()">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                                    </svg>
                                    Chia sẻ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Filter Menu -->
                <div class="filter-menu" id="filterMenu">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="font-semibold">Bộ lọc</h3>
                        <button onclick="window.app.toggleFilterMenu()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="filter-option" data-filter="temple">
                        <div class="checkbox checked">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>
                        </div>
                        <span>Đền chùa</span>
                    </div>
                    
                    <div class="filter-option" data-filter="food">
                        <div class="checkbox checked">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>
                        </div>
                        <span>Ẩm thực đường phố</span>
                    </div>
                    
                    <div class="filter-option" data-filter="craft">
                        <div class="checkbox checked">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>
                        </div>
                        <span>Làng nghề</span>
                    </div>
                    
                    <div class="filter-option" data-filter="art">
                        <div class="checkbox"></div>
                        <span>Nghệ thuật truyền thống</span>
                    </div>
                    
                    <div class="filter-option" data-filter="spiritual">
                        <div class="checkbox"></div>
                        <span>Tâm linh</span>
                    </div>
                    
                    <div class="filter-option" data-filter="festival">
                        <div class="checkbox"></div>
                        <span>Lễ hội</span>
                    </div>
                    
                    <div class="filter-option" data-filter="history">
                        <div class="checkbox"></div>
                        <span>Di tích lịch sử</span>
                    </div>
                    
                    <button class="action-button w-full mt-4" onclick="window.app.applyFilters()">Áp dụng</button>
                </div>
            </div>
        `;
    },
    
    getTripContent() {
        return `
            <div class="trip-planner">
                <h1 class="text-xl font-bold heritage-title mb-4">Lên kế hoạch cho chuyến đi</h1>
                
                <!-- Time Option -->
                <div class="option-card">
                    <div class="option-title">Thời gian</div>
                    <div class="option-chips">
                        <div class="option-chip" data-option="duration" data-value="1 ngày">1 ngày</div>
                        <div class="option-chip selected" data-option="duration" data-value="2-3 ngày">2-3 ngày</div>
                        <div class="option-chip" data-option="duration" data-value="1 tuần">1 tuần</div>
                        <div class="option-chip" data-option="duration" data-value="2 tuần+">2 tuần+</div>
                    </div>
                </div>
                
                <!-- Budget Option -->
                <div class="option-card">
                    <div class="option-title">Ngân sách</div>
                    <div class="option-chips">
                        <div class="option-chip" data-option="budget" data-value="Tiết kiệm">Tiết kiệm</div>
                        <div class="option-chip selected" data-option="budget" data-value="Vừa phải">Vừa phải</div>
                        <div class="option-chip" data-option="budget" data-value="Cao cấp">Cao cấp</div>
                    </div>
                </div>
                
                <!-- Theme Option -->
                <div class="option-card">
                    <div class="option-title">Chủ đề</div>
                    <div class="option-chips">
                        <div class="option-chip selected" data-option="theme" data-value="Ẩm thực">Ẩm thực</div>
                        <div class="option-chip" data-option="theme" data-value="Thiên nhiên">Thiên nhiên</div>
                        <div class="option-chip selected" data-option="theme" data-value="Lịch sử">Lịch sử</div>
                        <div class="option-chip" data-option="theme" data-value="Làng nghề">Làng nghề</div>
                        <div class="option-chip" data-option="theme" data-value="Tâm linh">Tâm linh</div>
                    </div>
                </div>
                
                <button class="action-button w-full mt-4" onclick="window.app.createTrip()">Tạo hành trình</button>
                
                <!-- Suggested Routes -->
                <div class="mt-8">
                    <h2 class="text-lg font-semibold mb-4">Hành trình gợi ý</h2>
                    
                    ${this.renderTripCards()}
                </div>
            </div>
        `;
    },
    
    getExploreContent() {
        const spot = window.app.currentSpot || mockData.heritageSpots[0];
        return `
            <div class="detail-header" style="background-image: url('${spot.image}');">
                <div class="detail-overlay">
                    <h1 class="text-2xl font-bold heritage-title">${spot.name}</h1>
                    <div class="flex mt-2">
                        ${spot.tags.map(tag => `<span class="tag bg-white bg-opacity-20 text-white">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
            
            <div class="detail-content">
                <!-- Audio/Video Preview -->
                <div class="bg-gray-100 rounded-xl p-4 flex items-center mb-6">
                    <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                        </svg>
                    </div>
                    <div class="ml-3">
                        <h3 class="text-sm font-medium">Câu chuyện về ${spot.name}</h3>
                        <p class="text-xs text-gray-500">${spot.audio || '3:45 phút'}</p>
                    </div>
                </div>
                
                <!-- Description -->
                <div class="detail-section">
                    <div class="detail-section-title">
                        <div class="detail-section-icon text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        </div>
                        Giới thiệu
                    </div>
                    <p class="text-sm text-gray-600 mt-2">
                        ${spot.description}. Đây là một trong những di sản văn hóa quan trọng của Việt Nam, 
                        mang giá trị lịch sử và văn hóa sâu sắc, được nhiều du khách trong và ngoài nước yêu thích.
                    </p>
                </div>
                
                <!-- Cultural Info -->
                <div class="detail-section">
                    <div class="detail-section-title">
                        <div class="detail-section-icon text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                            </svg>
                        </div>
                        Giá trị văn hóa
                    </div>
                    <p class="text-sm text-gray-600 mt-2">
                        Di sản này không chỉ mang giá trị kiến trúc mà còn là biểu tượng của văn hóa truyền thống Việt Nam.
                        Quy trình bảo tồn và phát triển được thực hiện nghiêm ngặt để giữ gìn bản sắc văn hóa dân tộc.
                    </p>
                </div>
                
                <!-- Hours & Tips -->
                <div class="detail-section">
                    <div class="detail-section-title">
                        <div class="detail-section-icon text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                            </svg>
                        </div>
                        Thời gian & Lưu ý
                    </div>
                    <div class="text-sm text-gray-600 mt-2">
                        <p><strong>Giờ mở cửa:</strong> 8:00 - 17:00 hàng ngày</p>
                        <p><strong>Thời gian lý tưởng:</strong> 2-3 giờ để tham quan và trải nghiệm</p>
                        <p class="mt-2"><strong>Lưu ý:</strong> Nên đi vào buổi sáng để có trải nghiệm tốt nhất. Mang theo tiền mặt cho các dịch vụ.</p>
                    </div>
                </div>
                
                <!-- Location -->
                <div class="detail-section">
                    <div class="detail-section-title">
                        <div class="detail-section-icon text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                        </div>
                        Vị trí
                    </div>
                    <div class="bg-gray-100 h-32 rounded-xl mt-2 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        <span class="ml-2 text-sm">Vị trí: ${spot.location ? `${spot.location.lat}, ${spot.location.lng}` : 'Đang cập nhật'}</span>
                    </div>
                </div>
                
                <!-- Action Buttons -->
                <div class="flex gap-3 mt-6">
                    <button class="action-button flex-1" onclick="window.app.addToTrip()">Thêm vào hành trình</button>
                    <button class="button-secondary flex-1" onclick="window.app.shareSpot()">Chia sẻ</button>
                </div>
            </div>
        `;
    },
    
    getProfileContent() {
        return `
            <div class="detail-content">
                <!-- Profile Header -->
                <div class="text-center mb-6">
                    <div class="w-24 h-24 rounded-full bg-primary-light mx-auto mb-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="var(--primary)" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>
                    </div>
                    <h2 class="text-xl font-bold heritage-title">Nguyễn Văn A</h2>
                    <p class="text-sm text-gray-500">Người khám phá di sản</p>
                </div>
                
                <!-- Stats -->
                <div class="grid grid-cols-3 gap-4 mb-6">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-primary">12</div>
                        <div class="text-xs text-gray-500">Địa điểm</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-primary">5</div>
                        <div class="text-xs text-gray-500">Hành trình</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-primary">28</div>
                        <div class="text-xs text-gray-500">Ngày khám phá</div>
                    </div>
                </div>
                
                <!-- Menu Options -->
                <div class="space-y-4">
                    <div class="option-card" onclick="window.app.showSavedPlaces()">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--primary)" viewBox="0 0 16 16">
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                    </svg>
                                </div>
                                <div>
                                    <div class="font-semibold">Địa điểm đã lưu</div>
                                    <div class="text-xs text-gray-500">12 địa điểm</div>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                    </div>
                    
                    <div class="option-card" onclick="window.app.showMyTrips()">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--primary)" viewBox="0 0 16 16">
                                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                                        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                </div>
                                <div>
                                    <div class="font-semibold">Hành trình của tôi</div>
                                    <div class="text-xs text-gray-500">5 hành trình</div>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                    </div>
                    
                    <div class="option-card" onclick="window.app.showAchievements()">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--primary)" viewBox="0 0 16 16">
                                        <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                                    </svg>
                                </div>
                                <div>
                                    <div class="font-semibold">Thành tích</div>
                                    <div class="text-xs text-gray-500">Huy hiệu khám phá</div>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                    </div>
                    
                    <div class="option-card" onclick="window.app.showSettings()">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--primary)" viewBox="0 0 16 16">
                                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                                    </svg>
                                </div>
                                <div>
                                    <div class="font-semibold">Cài đặt</div>
                                    <div class="text-xs text-gray-500">Tùy chỉnh ứng dụng</div>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <!-- Logout Button -->
                <div class="mt-8">
                    <button class="button-secondary w-full" onclick="window.app.logout()">Đăng xuất</button>
                </div>
            </div>
        `;
    },
    
    renderTripCards() {
        return mockData.trips.map(trip => `
            <div class="route-card">
                <div class="route-image" style="background-image: url('${trip.image}');"></div>
                <div class="p-4">
                    <h3 class="font-semibold">${trip.title}</h3>
                    <div class="flex items-center text-sm text-gray-600 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="mr-1">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg>
                        ${trip.duration}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="ml-3 mr-1">
                            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                        </svg>
                        ${trip.budget}
                    </div>
                    <div class="flex mt-3">
                        ${trip.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="flex justify-between mt-4">
                        <button class="text-sm font-medium text-secondary" onclick="window.app.editTrip(${trip.id})">Chỉnh sửa</button>
                        <button class="text-sm font-medium text-primary" onclick="window.app.saveTrip(${trip.id})">Lưu hành trình</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
};

// Extend the main app object with page templates
Object.assign(window.app || {}, pageTemplates); 