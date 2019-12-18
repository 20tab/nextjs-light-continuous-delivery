# cat post_gen_project.py
import os
import shutil


def remove(filepath):
    if os.path.isfile(filepath):
        os.remove(filepath)
    elif os.path.isdir(filepath):
        shutil.rmtree(filepath)


def remove_dirs():
    use_docker = "{{cookiecutter.use_docker}}" == "y"

    if not use_docker:
        # remove("uwsgiconf/docker.ini")
        pass


remove_dirs()
