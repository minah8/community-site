package project.blog.community.project.dto.response;

import project.blog.community.project.entity.Gallery;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class GalleryListResponseDTO {

private final int PhotoNumber;
private final String shortTitle;
private final String regDate;
    private final String writer;

    public GalleryListResponseDTO(Gallery gallery) {
        this.PhotoNumber = gallery.getPhotoNumber();
        this.shortTitle = makeShortTitle(gallery.getTitle());
        this.regDate = makePrettierDateString(gallery.getRegDate());
        this.writer = gallery.getUser();
    }

    private String makePrettierDateString(LocalDateTime regDate) {
        DateTimeFormatter dto = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        return null;
    }

    private String makeShortTitle(String title) {
        return sliceString(title,5);
    }
    private static String sliceString(String targetString, int wishLength) {
        return (targetString.length() > wishLength)
                ? targetString.substring(0, wishLength) + "..."
                : targetString
                ;
    }

}
