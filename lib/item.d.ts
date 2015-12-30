/// <reference path="common" />

declare module WPApi {


    interface Item {
        date?: string;
        date_gmt?: string;



        modified?: string;
        modified_gmt?: string;
        password?: string;
        slug?: string;
        status?: string;

        content?: Renderable;
        author?: number;
        excerpt?: Renderable;
        featured_image?: number;
        comment_status?: string;
        ping_status?: string;


    }

    /**
     * ReadOnly
     */
    interface ItemResponse extends WPApi.Item {
        guid?: Renderable;
        link?: string;
        id: number;
        type?: string;

    }
}