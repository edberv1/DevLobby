import React from "react";
import ContentModuleChat from "./ContentModuleChat/ContentModuleChat";
import StatsComponent from "./ContentModuleChat/StatsComponent";
import ContentModuleBlog from "./ContentModuleBlog/ContentModuleBlog";

const ContentModule = () => {
  return (
    <div>
      <ContentModuleChat />
      <StatsComponent />
      <ContentModuleBlog />
    </div>
  );
};

export default ContentModule;
