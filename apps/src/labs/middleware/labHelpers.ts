import { RawLevel, Level, CommonLevelProperties, JavalabView, Lab, Applab, Javalab } from "../types";

export function convertLevel(rawLevel: RawLevel): Level {
  console.log(rawLevel);
  const commonLevelProperties: CommonLevelProperties = {
    name: rawLevel.name,
    published: rawLevel.published,
    longInstructions: rawLevel.properties.long_instructions,
    miniRubric: convertStringBooleanToBoolean(rawLevel.properties.mini_rubric),
    startSources: rawLevel.properties.start_sources,
    submittable: convertStringBooleanToBoolean(rawLevel.properties.submittable)
  }
  if (rawLevel.type == 'Javalab') {
    let csaViewMode: JavalabView;
    if (rawLevel.properties.csa_view_mode === undefined) {
      csaViewMode = 'console';
    } else {
      csaViewMode = rawLevel.properties.csa_view_mode;
    }
    return {
      ...commonLevelProperties,
      type: rawLevel.type,
      csaViewMode: csaViewMode
    }
  } else {
    return {
      ...commonLevelProperties,
      type: rawLevel.type
    }
  }
}

export function getLabForLevel(level: Level): Lab {
  switch(level.type) {
    case 'Applab':
      return new Applab();
    case 'Javalab':
      return new Javalab(level.csaViewMode);
  }
}

function convertStringBooleanToBoolean(stringBoolen: 'true' | 'false') {
  return stringBoolen === 'true';
}