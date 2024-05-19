function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
      originalName: name,
      modifiedName: modifiedNames[index],
      id: index + 1
    }));
  }


  
  const userProfiles = createUserProfiles(names, modifiedNames);
  console.log('User profiles:', userProfiles);