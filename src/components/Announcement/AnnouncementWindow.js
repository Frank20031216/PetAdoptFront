import React, { useState, useEffect } from 'react';
import '../../compoentsCss/AnnouncementWindow.css'


function AnnouncementWindow() {
    const [announcements, setAnnouncements] = useState([]);
    const [content, setContent] = useState('');
    const [updatedAt, setUpdatedAt] = useState('');
    const [isVisible, setIsVisible] = useState(true);


    useEffect(() => {
        setAnnouncements(
            [
                { "announcementId": 1, "title": "宠物领养活动", "content": "本周六将在公园举行宠物领养活动。", "createdBy": 2, "createdAt": "2025-01-19T14:01:09", "updatedAt": "2025-01-19T14:01:09", "isActive": 1 },
                { "announcementId": 2, "title": "欢迎新成员", "content": "我们很高兴地欢迎您加入我们的社区。", "createdBy": 1, "createdAt": "2025-01-19T14:02:34", "updatedAt": "2025-01-19T14:02:34", "isActive": 1 },
                { "announcementId": 3, "title": "欢迎下次光临", "content": "山水有相逢。", "createdBy": 1, "createdAt": "2025-01-19T14:03:13", "updatedAt": "2025-01-19T14:25:29", "isActive": 0 },
                { "announcementId": 6, "title": "删除测试", "content": "DELTET ME!", "createdBy": 1, "createdAt": "2025-01-19T14:10:03", "updatedAt": "2025-01-19T14:10:03", "isActive": 1 }
            ])

    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    const noMoreAttention = () => {
        localStorage.setItem('isShowAnnouncement', false);
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    if (localStorage.getItem('isShowAnnouncement') === 'true' && isVisible === true) {
        return (
            <div className="announcement-window">
                
                <button className="close-button" onClick={handleClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M6 18L18 6M6 6l12 12" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <button className="no-attention-button" onClick={noMoreAttention}>
                    不再提示
                </button>

                <div className="content-container">
                    
                    <div className="sidebar">
                        <h3>公告列表</h3>
                        <ul>
                            {announcements.map((announcement) => (
                                <li
                                    key={announcement.id}
                                    onClick={() => {
                                        setContent(announcement.content)
                                        setUpdatedAt(announcement.updatedAt)
                                    }}
                                >
                                    {announcement.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                    
                    <div className="content">
                        <h3>公告详情</h3>
                        <p>{content}</p>
                        <p id="time">发布时间：{updatedAt}</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default AnnouncementWindow;