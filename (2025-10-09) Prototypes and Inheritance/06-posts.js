function solve () {
    class Post {
        title;
        content;

        constructor (title, content) {
            this.title = title;
            this.content = content;
        }

        toString () {
            let toStringResultMessages = [
                `Post: ${this.title}`,
                `Content: ${this.content}`
            ];
            
            return toStringResultMessages.join('\n');
        }
    }

    class SocialMediaPost extends Post {
        likes;
        dislikes;
        comments = [];

        constructor (title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
        }

        addComment (commentText) {
            this.comments.push(commentText);
        }

        toString () {
            let toStringResultMessages = [
                `Post: ${this.title}`,
                `Content: ${this.content}`,
                `Rating: ${this.likes - this.dislikes}`
            ];

            if (this.comments.length > 0) {
                toStringResultMessages.push(
                    'Comments:',
                    ...this.comments.map(comment => ` * ${comment}`)
                );
            }
            
            return toStringResultMessages.join('\n');
        }
    }

    class BlogPost extends Post {
        views;

        constructor (title, content, views) {
            super(title, content);
            this.views = views;
        }

        view () {
            this.views++;
            return this;
        }

        toString () {
            let toStringResultMessages = [
                `Post: ${this.title}`,
                `Content: ${this.content}`,
                `Views: ${this.views}`
            ];
            
            return toStringResultMessages.join('\n');
        }
    }

    return { Post, SocialMediaPost, BlogPost };
}

const classes = solve();
const post = new classes.Post('Post', 'Content');

console.log(post.toString());
// Post: Post
// Content: Content

const scmp = new classes.SocialMediaPost('TestTitle', 'TestContent', 25, 30);

scmp.addComment('Good post');
scmp.addComment('Very good post');
scmp.addComment('Wow!');

console.log(scmp.toString());
// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!