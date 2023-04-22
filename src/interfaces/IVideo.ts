export default interface IVideo {
    _id: string;
    title: string;
    thumbnail: string;
    embed: {
        iframeUrl: string;
    };
    resourceOwner: {
        _id: string;
        username: string;
        nickname: string;
        avatarUrl: string;
    };
    category: string;
    dislikeCount?: string;
    likeCount?: string;
    viewCount?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
