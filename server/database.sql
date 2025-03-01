CREATE TABLE post (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    author VARCHAR(100) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    title VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO post (
    author,
    image_url,
    title,
    content
) VALUES ('Shannon', 'Demo url', 'Demo title', 'Demo content');