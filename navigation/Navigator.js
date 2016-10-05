'use strict'
import React, { Component, Text, Navigator } from 'react-native';

//Main menu: presents an animation of and gives information about your character
//Story: continue your story from wherever you left off
//Every 'chapter' is within its own component and the info displayed is a tree WITHIN that component
//Different chapters are stored within different components so that no one chapter holds too many decision variables
//Need some kind of database to keep track of decisions that will affect the character or what other options will be presented to the user
//Two tabs? One with story and one with main menu?
  //No matter what the screen (chapter), the main menu tab will always be available
