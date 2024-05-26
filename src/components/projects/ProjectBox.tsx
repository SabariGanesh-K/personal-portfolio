import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { FaGgCircle } from "react-icons/fa";
import { VscActivateBreakpoints } from "react-icons/vsc";
const ProjectBox = ({ project }: { project: Project }) => {
  return (
    <div className="w-screen flex flex-row justify-center mt-10 bg-transparent">
      <Card className="w-[70%] bg-black">
        <CardHeader className="flex gap-3 bg-blue-600 dark:bg-blue-500">
     
          <VscActivateBreakpoints color="white" size={50} />
          <div className="flex flex-col">
            <p className="text-3xl text-white">{project.title}</p>
            <p className="text-small  text-white">
              {project.stack}
            </p>
          </div>
        </CardHeader>
        <Divider className="text-white bg-gray-500" />
        <CardBody>
          {project.description.map((item: string, k: number) => {
            return (
              <p key={k} className="text-gray-300 mt-2">
                {item}
              </p>
            );
          })}
        </CardBody>
        <Divider className="text-white bg-gray-500" />

        {/* <CardFooter> */}
        <div className="m-5">
      
          {project.links.map((item: Link, k: number) =>
            item.src === "-" ? (
              <div key={k}>
                <Link className="cursor-not-allowed" isExternal showAnchorIcon>
                  {item.text} {item.src == "-" ? " [COMING SOON]" : ""}
                </Link>
              </div>
            ) : (
              <div key={k}>
                <Link isExternal showAnchorIcon href={item.src}>
                  {item.text} 
                </Link>
              </div>
            )
          )}
        </div>
        {/* </CardFooter> */}
      </Card>
    </div>
  );
};

export default ProjectBox;
