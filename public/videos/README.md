# Video Upload Instructions

To add your "About Me" video:

1. Place your video file in this directory (`public/videos/`)
2. Name it `about-me.mp4` (or `about-me.webm` for WebM format)
3. The video will automatically appear on the Home page in the "About me" section

## Supported Formats

- MP4 (recommended)
- WebM

## Recommended Video Specifications

- Format: MP4 (H.264 codec)
- Resolution: 1280x720 (720p) or 1920x1080 (1080p)
- Max file size: 50MB (for better loading performance)
- Duration: 2-5 minutes recommended

## Note

The video player supports multiple formats. If you provide both MP4 and WebM, the browser will automatically choose the best supported format.
Step 1: Install ffmpeg (if not installed)
On macOS:

# Using Homebrewbrew install ffmpeg

Step 2: Resize and compress video
Run one of these commands in your terminal:
Option 1: High quality (recommended for web)
ffmpeg -i src/assets/DJI_0050.MP4 \
 -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
 -c:v libx264 \
 -preset medium \
 -crf 23 \
 -c:a aac \
 -b:a 128k \
 public/videos/about-me.mp4
cd /Users/denisbandurin/Desktop/Проекты/denis_bandurinffmpeg -i src/assets/DJI_0050.MP4 \ -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \ -c:v libx264 \ -preset medium \ -crf 23 \ -c:a aac \ -b:a 128k \ public/videos/about-me.mp4
