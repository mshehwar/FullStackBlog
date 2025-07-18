


// import conf from '../conf/conf.js';
// import { Client, ID, Databases, Storage, Query } from "appwrite";

// export class Service{
//     client = new Client();
//     databases;
//     bucket;
    
//     constructor(){
//         this.client
//         .setEndpoint(conf.appwriteUrl)
//         .setProject(conf.appwriteProjectId);
//         this.databases = new Databases(this.client);
//         this.bucket = new Storage(this.client);
//     }

//     async createPost({title, slug, content, featuredImage, status, userId}){
//         try {
//             return await this.databases.createDocument(
//                 conf.appwriteDatabase,
//                 conf.appwriteCollection,
//                 slug,
//                 {
//                     title,
//                     content,
//                     featuredImage,
//                     status,
//                     userId,
//                 }
//             )
//         } catch (error) {
//             console.log("Appwrite serive :: createPost :: error", error);
//         }
//     }

//     async updatePost(slug, {title, content, featuredImage, status}){
//         try {
//             return await this.databases.updateDocument(
//                 conf.appwriteDatabase,
//                 conf.appwriteCollection,
//                 slug,
//                 {
//                     title,
//                     content,
//                     featuredImage,
//                     status,

//                 }
//             )
//         } catch (error) {
//             console.log("Appwrite serive :: updatePost :: error", error);
//         }
//     }

//     async deletePost(slug){
//         try {
//             await this.databases.deleteDocument(
//                 conf.appwriteDatabase,
//                 conf.appwriteCollection,
//                 slug
            
//             )
//             return true
//         } catch (error) {
//             console.log("Appwrite serive :: deletePost :: error", error);
//             return false
//         }
//     }

//     async getPost(slug){
//         try {
//             return await this.databases.getDocument(
//                 conf.appwriteDatabase,
//                 conf.appwriteCollection,
//                 slug
            
//             )
//         } catch (error) {
//             console.log("Appwrite serive :: getPost :: error", error);
//             return false
//         }
//     }

//     async getPosts(queries = [Query.equal("status", "active")]){
//         try {
//             return await this.databases.listDocuments(
//                 conf.appwriteDatabase,
//                 conf.appwriteCollection,
//                 queries,
                

//             )
//         } catch (error) {
//             console.log("Appwrite serive :: getPosts :: error", error);
//             return false
//         }
//     }

//     // file upload service

//     async uploadFile(file){
//         try {
//             return await this.bucket.createFile(
//                 conf.appwriteBucket,
//                 ID.unique(),
//                 file
//             )
//         } catch (error) {
//             console.log("Appwrite serive :: uploadFile :: error", error);
//             return false
//         }
//     }

//     async deleteFile(fileId){
//         try {
//             await this.bucket.deleteFile(
//                 conf.appwriteBucket,
//                 fileId
//             )
//             return true
//         } catch (error) {
//             console.log("Appwrite serive :: deleteFile :: error", error);
//             return false
//         }
//     }

//     getFileView(fileId) {
//     return this.bucket.getFileView(conf.appwriteBucket, fileId);
// }

//     // getFilePreview(fileId){
//     //     return this.bucket.getFilePreview(
//     //         conf.appwriteBucket,
//     //         fileId,
              
//     //     )
       
//     // }
      
// //     getFilePreview(fileId) {
// //     return this.bucket.getFilePreview(conf.appwriteBucket, fileId).href;
// // }

// }


// const service = new Service()
// export default service










// import conf from '../conf/conf.js';
// import { Client, ID, Databases, Storage, Query } from "appwrite";

// export class Service {
//     client = new Client();
//     databases;
//     bucket;
    
//     constructor() {
//         this.client
//             .setEndpoint(conf.appwriteUrl)
//             .setProject(conf.appwriteProjectId);
//         this.databases = new Databases(this.client);
//         this.bucket = new Storage(this.client);
//     }

//   async createPost({ title, slug, content, featuredImage, status, userId }) {
//   try {
//     return await this.databases.createDocument(
//       conf.appwriteDatabase,
//       conf.appwriteCollection,
//       slug, // use slug as document ID
//       {
//         title,
//         slug, // also save slug as an attribute
//         content,
//         featuredImage,
//         status,
//         userId,
//       }
//     );
//   } catch (error) {
//     console.log("Appwrite service :: createPost :: error", error);
//   }
// }


//     async updatePost(documentId, { title, content, featuredImage, status }) {
//         try {
//             return await this.databases.updateDocument(
//                 conf.appwriteDatabase,
//                 conf.appwriteCollection,
//                 documentId,
//                 {
//                     title,
//                     content,
//                     featuredImage,
//                     status,
//                 }
//             );
//         } catch (error) {
//             console.log("Appwrite service :: updatePost :: error", error);
//         }
//     }

//     async deletePost(documentId) {
//         try {
//             await this.databases.deleteDocument(
//                 conf.appwriteDatabase,
//                 conf.appwriteCollection,
//                 documentId
//             );
//             return true;
//         } catch (error) {
//             console.log("Appwrite service :: deletePost :: error", error);
//             return false;
//         }
//     }

//     async getPost(slug) {
//         try {
//             const response = await this.databases.listDocuments(
//                 conf.appwriteDatabase,
//                 conf.appwriteCollection,
//                 [Query.equal("slug", slug)]
//             );
//             return response.documents[0] || null;
//         } catch (error) {
//             console.log("Appwrite service :: getPost :: error", error);
//             return false;
//         }
//     }

//     async getPosts(queries = [Query.equal("status", "active")]) {
//         try {
//             return await this.databases.listDocuments(
//                 conf.appwriteDatabase,
//                 conf.appwriteCollection,
//                 queries
//             );
//         } catch (error) {
//             console.log("Appwrite service :: getPosts :: error", error);
//             return false;
//         }
//     }

//     // file upload service
//     async uploadFile(file) {
//         try {
//             return await this.bucket.createFile(
//                 conf.appwriteBucket,
//                 ID.unique(),
//                 file
//             );
//         } catch (error) {
//             console.log("Appwrite service :: uploadFile :: error", error);
//             return false;
//         }
//     }

//     async deleteFile(fileId) {
//         try {
//             await this.bucket.deleteFile(
//                 conf.appwriteBucket,
//                 fileId
//             );
//             return true;
//         } catch (error) {
//             console.log("Appwrite service :: deleteFile :: error", error);
//             return false;
//         }
//     }

//     getFileView(fileId) {
//         return this.bucket.getFileView(conf.appwriteBucket, fileId);
//     }
// }

// const service = new Service();
// export default service;


import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // Utility function to sanitize and validate slug
    sanitizeSlug(input) {
        return input
            .toLowerCase()
            .trim()
            .replace(/[^\w\-\.]+/g, '-') // replace invalid chars
            .replace(/^-+|-+$/g, '')     // remove leading/trailing hyphens
            .substring(0, 36);           // max 36 characters
    }

    isValidSlug(slug) {
        return /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,35}$/.test(slug);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            const cleanSlug = this.sanitizeSlug(slug);
            const documentId = this.isValidSlug(cleanSlug) ? cleanSlug : ID.unique();

            return await this.databases.createDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                documentId,
                {
                    title,
                    slug: cleanSlug, // store clean slug even if document ID is random
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                slug
            );
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                queries
            );
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucket,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucket, fileId);
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getFileView(fileId) {
        return this.bucket.getFileView(conf.appwriteBucket, fileId);
    }

    // Uncomment if needed
    // getFilePreview(fileId) {
    //     return this.bucket.getFilePreview(conf.appwriteBucket, fileId).href;
    // }
}

const service = new Service();
export default service;
