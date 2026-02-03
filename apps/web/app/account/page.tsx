// apps/web/app/account/page.tsx

import BlogsHeader from "@/components/ui/BlogsHeader";
import DinelGroupBv from "@/components/ui/DinelGroupBv";

import CandidateProfilePage from "@/components/account/profile_details";
import { candidateAuth } from "@repo/auth-web";
import { redirect } from "next/navigation";
import TabsClient from "@/components/account/TabsClient";

export default async function AccountPage() {
  const session = await candidateAuth();

  if (!session || session.expired) {
    redirect("/login");
  }

  const candidateID = session.user.id;

  return (
    <>
      <BlogsHeader />
      <article className="bg-white">
        <div className="container mx-auto px-4 py-12 space-y-6">
          <div className="container mx-auto py-8 flex gap-8 justify-center items-start">
            <div className="w-full flex flex-col md:flex-row gap-12">
              <div className="flex-1 bg-background rounded-lg p-8 text-foreground">
                <TabsClient
                  candidateID={candidateID}
                  profileSlot={
                    <CandidateProfilePage candidateID={candidateID} />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </article>
      <DinelGroupBv />
    </>
  );
}

      {/* <article className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <TabsClient
            candidateID={candidateID}
            profileSlot={
              <CandidateProfilePage candidateID={candidateID} />
            }
          />
        </div>
      </article> */}
/* 
// import TabsComponent from "@/components/account/Tabs";
export default async function AccountPage() {
  const session = await candidateAuth();

  if (!session || session?.expired) {
    redirect("/login");
  }

  const candidateID = session?.user?.id;

  return (
    <>
      <BlogsHeader />
      <article className="bg-white">
        <div className="container mx-auto px-4 py-12 space-y-6">
          <div className="container mx-auto py-8 flex gap-8 justify-center items-start">
            <div className="w-full flex flex-col md:flex-row gap-12">
              <div className="flex-1 bg-background rounded-lg p-8 text-foreground">
                <TabsComponent candidateID={candidateID} />
              </div>
            </div>
          </div>
        </div>
      </article>
      <DinelGroupBv />
    </>
  );
} */

{
  /* {blog.featured_image_url && (
            <div className="relative h-105 container mx-auto mt-5">
              <Image
                src={blog.featured_image_url}
                alt={blog.title}
                fill
                className="h-full w-full object-cover"
              />
            </div>
          )} */
}

{
  /* <h1 className="text-4xl font-bold text-gray-900">{blog.title}</h1>
  
            <p className="text-sm text-gray-500">
              Published on {new Date(blog.published_at).toLocaleDateString()}
            </p>
  
            {blog.excerpt && (
              <p className="text-lg text-gray-700 italic">{blog.excerpt}</p>
            )}
  
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            /> */
}
