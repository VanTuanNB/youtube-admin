interface IPropIcon {
    width?: string;
    height?: string;
    fill?: string;
    className?: string;
}
export const GoogleIcon = ({ width, height, fill, className }: IPropIcon) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 48 48"
        className={className}
        style={{ pointerEvents: 'none', display: 'inline-block', width, height, fill }}
    >
        <defs>
            <path
                id="a"
                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
            />
        </defs>
        <clipPath id="b">
            <use xlinkHref="#a" overflow="visible" />
        </clipPath>
        <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
        <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
        <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
        <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
    </svg>
);

export const HomeIcon = ({ width = '100%', height = '100%', className, fill = '#333' }: IPropIcon) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const HomeIconActive = ({ width = '100%', height = '100%', className, fill = '#333' }: IPropIcon) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path d="M4,10V21h6V15h4v6h6V10L12,3Z" className="style-scope yt-icon"></path>
        </g>
    </svg>
);

export const UserIcon = ({ width = '100%', height = '100%', className, fill }: IPropIcon) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,3c4.96,0,9,4.04,9,9 c0,1.42-0.34,2.76-0.93,3.96c-1.53-1.72-3.98-2.89-7.38-3.03C14.57,12.6,16,10.97,16,9c0-2.21-1.79-4-4-4C9.79,5,8,6.79,8,9 c0,1.97,1.43,3.6,3.31,3.93c-3.4,0.14-5.85,1.31-7.38,3.03C3.34,14.76,3,13.42,3,12C3,7.04,7.04,3,12,3z M9,9c0-1.65,1.35-3,3-3 s3,1.35,3,3c0,1.65-1.35,3-3,3S9,10.65,9,9z M12,21c-3.16,0-5.94-1.64-7.55-4.12C6.01,14.93,8.61,13.9,12,13.9 c3.39,0,5.99,1.03,7.55,2.98C17.94,19.36,15.16,21,12,21z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);

export const VideoIcon = ({ width = '100%', height = '100%', className, fill }: IPropIcon) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z" className="style-scope yt-icon"></path>
        </g>
    </svg>
);

export const LoaderSvg = ({ width = '100%', height = '100%', className, fill = '#fff' }: IPropIcon) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 45 45"
        stroke={fill}
        className={className}
    >
        <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">
            <circle cx="22" cy="22" r="6" strokeOpacity="0">
                <animate
                    attributeName="r"
                    begin="1.5s"
                    dur="3s"
                    values="6;22"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="stroke-opacity"
                    begin="1.5s"
                    dur="3s"
                    values="1;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="stroke-width"
                    begin="1.5s"
                    dur="3s"
                    values="2;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </circle>
            <circle cx="22" cy="22" r="6" strokeOpacity="0">
                <animate
                    attributeName="r"
                    begin="3s"
                    dur="3s"
                    values="6;22"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="stroke-opacity"
                    begin="3s"
                    dur="3s"
                    values="1;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="stroke-width"
                    begin="3s"
                    dur="3s"
                    values="2;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </circle>
            <circle cx="22" cy="22" r="8">
                <animate
                    attributeName="r"
                    begin="0s"
                    dur="1.5s"
                    values="6;1;2;3;4;5;6"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </circle>
        </g>
    </svg>
);

export const LogoutIcon = ({ width, height, fill = '#333', className }: IPropIcon) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        style={{ pointerEvents: 'none', width, height, fill }}
    >
        <g className="style-scope yt-icon">
            <path
                d="M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z"
                className="style-scope yt-icon"
            ></path>
        </g>
    </svg>
);
