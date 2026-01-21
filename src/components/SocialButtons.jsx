function SocialButtons({ restaurant }) {
    const pageUrl = restaurant.contact?.site;
    const shareUrl = pageUrl
        ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`
        : null;

    return (
        <div className="social-buttons">
            {pageUrl && (
                <>
                <a
                    href={pageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn website"
                >
                    🌐 Website
                </a>

                <a
                    href={shareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn facebook"
                >   
                    👍 Share
                </a>
            </>
            )}
        </div>
    );
}

export default SocialButtons;
